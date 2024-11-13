import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import style from './Loader.module.css';

function Loader() {
  return (
    <Container className={`d-flex justify-content-center mt-5 ${style.loader}`}>
      <h2>
        <Spinner animation="grow" /> Loading...
      </h2>
    </Container>
  );
}

export default Loader;
