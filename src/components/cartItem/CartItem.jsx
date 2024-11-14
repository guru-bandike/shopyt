import Container from 'react-bootstrap/Container';

import style from './CartItem.module.css';

function CartItem({ item }) {
  const { title } = item;
  console.log(item);
  return <Container className={style.cartItem}>{title}</Container>;
}

export default CartItem;
