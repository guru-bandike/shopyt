import Container from 'react-bootstrap/Container';

import style from './Cart.module.css';
import { useCartValues } from '../../../context/cart.context';
import CartItem from '../../../components/cartItem/CartItem';

function Cart() {
  const { cartItems } = useCartValues();

  if (cartItems.length === 0) return <h2 className="text-center mt-5">Cart is Empty!</h2>;

  return (
    <Container className={style.cartContainer}>
      {cartItems.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </Container>
  );
}

export default Cart;
