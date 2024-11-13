import BCard from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import style from './Card.module.css';

function Card({ product }) {
  const { name, price, image, rating } = product;
  return (
    <BCard className={style.card}>
      <BCard.Img variant="top" className={style.cardImg} src={image} />
      <BCard.Body>
        <BCard.Title>{name}</BCard.Title>
        <BCard.Title className={style.priceAndRatingWrapper}>
          <span className={style.price}>₹ {price}</span>
          <span className={style.rating}>
            <span>{rating.rate}</span>
            <img src="/star.svg" alt="star icon" />
          </span>
        </BCard.Title>
        <Button className={style.addToCartBtn}>Add To Cart</Button>
      </BCard.Body>
    </BCard>
  );
}

export default Card;
