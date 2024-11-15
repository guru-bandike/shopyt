import { useCartValues } from '../../context/cart.context';

import style from './CartItem.module.css';

function CartItem({ item }) {
  const { cartItems, removeFromCart, updateQuantity } = useCartValues();

  const priceAfterDiscount = (item.price - (item.price / 100) * item.discountInPercentage).toFixed(
    2
  );

  const handleQuantityChange = (id, amount) => {
    const item = cartItems.find((item) => item.id === id);
    const newQuantity = item.quantity + amount;
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };
  return (
    <div className={style.cartItem} key={item.id}>
      <img src={item.image} alt="Poduct" className={style.itemImage} />
      <div className={style.itemDetails}>
        <h4>{item.title}</h4>
        <p className={style.price}>
          ₹{priceAfterDiscount} <span className={style.originalPrice}>₹{item.price}</span>
          <span className={style.discount}>{item.discountInPercentage}% Off</span>
        </p>
        <div className={style.quantityControls}>
          <button
            className={style.decreaseQuantity}
            onClick={() => handleQuantityChange(item.id, -1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className={style.increaseQuantity}
            onClick={() => handleQuantityChange(item.id, 1)}
          >
            +
          </button>
        </div>
        <button className={style.remove} onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
