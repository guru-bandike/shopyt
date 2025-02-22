import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Home from './pages/app/home/Home';
import Navbar from './components/layout/navbar/Navbar';
import Page404 from './pages/misc/Page404/Page404';
import { ProductProvider } from './context/product.context';
import { CartProvider } from './context/cart.context';
import Cart from './pages/app/cart/Cart';
import { AuthProvider } from './context/auth.context';
import Auth from './pages/app/auth/Auth';
import Logout from './pages/app/auth/Logout';
import { Toaster } from 'react-hot-toast';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      errorElement: <Page404 />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/auth',
          children: [
            { index: true, element: <Auth /> },
            { path: 'logout', element: <Logout /> },
          ],
        },
        {
          path: '/cart',
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router} />
          <Toaster position="bottom-right" />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
