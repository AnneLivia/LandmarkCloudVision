// to render the children from the parent router
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Center from '../Center';

const Layout = () => {
  return (
    <Center>
      <Container className='mt-4 mb-4 black'>
        <Outlet />
      </Container>
    </Center>
  );
};

export default Layout;
