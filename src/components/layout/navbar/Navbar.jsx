import BNav from 'react-bootstrap/Nav';
import BNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink, Outlet } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

import style from './Navbar.module.css';
import { useAuth } from '../../../context/auth.context';
import { useCartValues } from '../../../context/cart.context';

function Navbar() {
  const { isLoggedIn } = useAuth();
  const { cartItems } = useCartValues();

  const cartItemsCount = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

  const getLinkStyle = ({ isActive }) =>
    isActive ? `${style.activeNavLink} ${style.navLink}` : style.navLink;

  return (
    <>
      <div className={style.navbarBackground}></div>
      <BNavbar className={style.navbar}>
        <Container>
          <BNavbar.Brand href="/" as={NavLink}>
            <img className={style.logo} src="/logo.svg" alt="logo" />
          </BNavbar.Brand>
          <BNav className={style.navMenu}>
            <NavLink to="/" className={getLinkStyle}>
              Products
            </NavLink>
            <NavLink to="/cart" className={getLinkStyle}>
              Cart
              <Badge pill={true} className={style.cartBadge}>
                {cartItemsCount}
              </Badge>
            </NavLink>
            {isLoggedIn ? (
              <NavLink to="/auth/logout" className={getLinkStyle}>
                Logout
              </NavLink>
            ) : (
              <NavLink to="/auth" className={getLinkStyle}>
                Login/Signup
              </NavLink>
            )}
          </BNav>
        </Container>
      </BNavbar>
      <Outlet />
    </>
  );
}

export default Navbar;
