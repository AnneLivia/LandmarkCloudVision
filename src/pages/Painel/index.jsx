import { useState } from 'react';
import { Col, Row, Form, Button, InputGroup, Image } from 'react-bootstrap';
import CustomCard from '../../components/Card';
import defaultImage from '../../assets/default_image.jpg';
import Map from './Maps';
import axios from '../../service/api.js';
import { toast } from 'react-toastify';

const Painel = () => {
  const [image, setImage] = useState(defaultImage);
  const [localizationOnMap, setLocalizationOnMap] = useState({
    latitude: 48.861013,
    longitude: 2.335818,
    locationName: 'Louvre',
    score: null,
  });

  const handleSubmit = async (event) => {
    console.log('aqui');
    event.preventDefault();
    if (event.target.image.files[0]) {
      const formData = new FormData();
      formData.append('image', event.target.image.files[0]);
      try {
        const response = await axios.post(
          '/?option=LANDMARK_DETECTION',
          formData
        );

        if (!response.data.result[0]) {
          throw new Error(
            'Não foi possível localizar este local. Tente com outra imagem!'
          );
        }
        const { description, score } = { ...response.data.result[0] };
        const { latitude, longitude } = {
          ...response.data.result[0].locations[0].latLng,
        };
        setLocalizationOnMap({
          latitude,
          longitude,
          locationName: description,
          score,
        });
      } catch (err) {
        if (err.message === 'Network Error') {
          return toast.error(
            'Erro de conexão com o servidor. Tente novamente mais tarde!'
          );
        }
        console.error(err);
        toast.error(err.message);
      }
    }
  };

  return (
    <CustomCard>
      <Row>
        <Col md={5} className='mb-2'>
          <h2 className='text-center'>Localiza AI</h2>
          <Image
            src={image}
            alt='An image uploaded by the user'
            className='d-block mx-auto rounded'
            style={{ backgroundColor: '#000', height: 300 }}
            thumbnail
          />
          <Form
            onSubmit={handleSubmit}
            encType='multipart/form-data'
            className='text-center mt-4'
          >
            <InputGroup className='mb-3'>
              <Form.Control
                size='sm'
                type='file'
                name='image'
                accept='.png, .jpg, .jpeg'
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
              />
              <Button
                className='text-nowrap'
                size='sm'
                variant='dark'
                type='submit'
              >
                Localizar
              </Button>
            </InputGroup>
          </Form>
        </Col>
        <Col md={2}></Col>
        <Col md={5}>
          <Map {...localizationOnMap} zoom={16} className='fluid' />
          <p className='mt-3 text-center'>{localizationOnMap.locationName}</p>
          {localizationOnMap.score && (
            <p className='mt-3 text-center'>
              Probilidade: {Math.round(localizationOnMap.score * 100)}%
            </p>
          )}
        </Col>
      </Row>
    </CustomCard>
  );
};
export default Painel;
