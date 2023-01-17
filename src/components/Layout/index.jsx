// to render the children from the parent router
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Layout = () => {
  return (
    <Container className='mt-4 mb-4 black'>
      <Outlet />
    </Container>
  );
};

export default Layout;
