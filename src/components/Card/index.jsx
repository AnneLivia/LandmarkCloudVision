import { Card } from 'react-bootstrap';
import './index.css';

const CustomCard = ({
  image,
  title,
  children,
  hasFooter = true,
  hasShadow = true,
  borderColor,
  isScrollable = false,
}) => {
  return (
    <Card
      className={`${hasShadow ? 'shadow' : ''} ${
        isScrollable ? 'scroll' : ''
      } blackTheme`}
      style={{
        borderColor,
        marginTop: '10%',
        marginBottom: '10%',
      }}
    >
      {image && (
        <img
          src={image.src}
          alt={image.alt}
          className={`mt-3 max-auto d-block ${image.className}`}
          width={image.width}
          height={image.height}
        />
      )}
      <Card.Body>
        <Card.Title
          className='text-center'
          style={{ fontWeight: 'bold', fontSize: 30 }}
        >
          {title}
        </Card.Title>
        {children}
      </Card.Body>
      {hasFooter && (
        <Card.Footer
          className='text-center'
          style={{
            backgroundColor: '#1D2021',
            borderTopColor: '#FFF',
          }}
        >
          Developed by Anne Livia
        </Card.Footer>
      )}
    </Card>
  );
};

export default CustomCard;
