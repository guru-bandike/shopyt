import BNav from 'react-bootstrap/Nav';
import BNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink, Outlet } from 'react-router-dom';

import style from './Navbar.module.css';
import { useAuth } from '../../../context/auth.context';

function Navbar() {
  const { isLoggedIn } = useAuth();

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
