import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Increase quantity if the item already exists
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      // Add new item with quantity 1
      return [
        ...prevCartItems,
        { ...item, price: Number(item.price), quantity: 1, discountInPercentage: 10 },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
          .filter((item) => item.quantity > 0) // Remove items with quantity < 1
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartValues = () => useContext(CartContext);

export { CartProvider, useCartValues };
