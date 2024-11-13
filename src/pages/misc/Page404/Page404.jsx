import { Button, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function Page404() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The page <code>{location.pathname}</code> does not exist.
      </p>
      <Button onClick={() => navigate('/')}>Go to Home</Button>
    </Container>
  );
}

export default Page404;
