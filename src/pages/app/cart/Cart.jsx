import React from 'react';
import style from './Cart.module.css';
import { useCartValues } from '../../../context/cart.context';
import CartItem from '../../../components/cartItem/CartItem';

function Cart() {
  const { cartItems } = useCartValues();

  if (cartItems.length === 0) return <EmptyCart />;

  let originalTotalAmount = 0;
  let totalDiscountAmount = 0;

  for (let item of cartItems) {
    originalTotalAmount += item.price * item.quantity;
    totalDiscountAmount += (item.price / 100) * item.discountInPercentage * item.quantity;
  }

  originalTotalAmount = originalTotalAmount.toFixed(2);
  totalDiscountAmount = totalDiscountAmount.toFixed(2);

  return (
    <div className={style.cartContainer}>
      <div className={style.cartItems}>
        {cartItems.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <div className={style.priceDetails}>
        <h4>Price Details</h4>
        <p>Price: ₹{originalTotalAmount}</p>
        <p>
          Discount: <span className={style.discount}>-₹{totalDiscountAmount}</span>
        </p>
        <p>
          Delivery Charges: <span className={style.deliveryFee}>₹40</span>&nbsp;
          <span className={style.freeDeliveryText}>Free</span>
        </p>
        <h4>
          Total Amount:{' '}
          <span className={style.totalAmount} id="totalPrice">
            ₹{(originalTotalAmount - totalDiscountAmount).toFixed(2)}
          </span>
        </h4>
        <p className={style.savings}>You will save ₹{totalDiscountAmount} on this order</p>
        <button className={style.placeOrder}>Place Order</button>
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className={style.emptyCartContainer}>
      <img src="/emptyCart.svg" className={style.emptyCartIcon} alt="empty cart " />{' '}
      <h1>Cart Is Empty...!</h1>
    </div>
  );
}

export default Cart;
