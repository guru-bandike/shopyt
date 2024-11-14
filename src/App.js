import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Home from './pages/app/home/Home';
import Navbar from './components/layout/navbar/Navbar';
import Page404 from './pages/misc/Page404/Page404';
import { ProductProvider } from './context/product.context';
import { CartProvider } from './context/cart.context';
import Cart from './pages/app/cart/Cart';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      errorElement: <Page404 />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/cart',
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router} />;
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
