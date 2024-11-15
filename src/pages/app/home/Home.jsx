import Container from 'react-bootstrap/Container';

import Card from '../../../components/card/Card';
import { useProductValues } from '../../../context/product.context';
import Loader from '../../../components/common/loader/Loader';
import style from './Home.module.css';

function Home() {
  const { products, isLoading } = useProductValues();

  if (isLoading) return <Loader />;

  return (
    <Container className={style.homeContainer}>
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </Container>
  );
}

export default Home;
