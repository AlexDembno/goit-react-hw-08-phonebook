import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/userSlice/user-selectors';
import NavBarAuth from './NavBarAuth/NavBarAuth';
import NavBarUser from './NavBarUser/NavBarUser';
import styles from './Navbar.module.css';

function NavBar() {
  const isLoding = useSelector(selectIsLogin);

  return (
    <ul className={styles.list}>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/contacts">
        PhoneBook
      </NavLink>

      {isLoding ? <NavBarUser /> : <NavBarAuth />}
    </ul>
  );
}

export default NavBar;
