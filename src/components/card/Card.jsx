import BCard from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import style from './Card.module.css';
import { useCartValues } from '../../context/cart.context';
import toast from 'react-hot-toast';

function Card({ product }) {
  const { addToCart } = useCartValues();

  function handleAddToCart(product) {
    addToCart(product);
    toast.success('Product successfully added to cart!');
  }

  const { title, price, image, rating } = product;
  return (
    <BCard className={style.card}>
      <BCard.Img variant="top" className={style.cardImg} src={image} />
      <BCard.Body className={style.cardBody}>
        <BCard.Title>{title}</BCard.Title>
        <BCard.Title className={style.priceAndRatingWrapper}>
          <span className={style.price}>₹ {price}</span>
          <span className={style.rating}>
            <span>{rating.rate}</span>
            <img src="/star.svg" alt="star icon" />
          </span>
        </BCard.Title>
        <Button className={style.addToCartBtn} onClick={() => handleAddToCart(product)}>
          Add To Cart
        </Button>
      </BCard.Body>
    </BCard>
  );
}

export default Card;
