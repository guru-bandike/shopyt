import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAndUpdateProducts = async () => {
      try {
        const { data } = await axios.get(PRODUCTS_URL);
        setProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndUpdateProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading }}>{children}</ProductContext.Provider>
  );
};

const useProductValues = () => {
  const value = useContext(ProductContext);
  return value;
};

export { ProductProvider, useProductValues };
