import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

function NavBar() {
  return (
    <ul className={styles.list}>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/contacts">
        PhoneBook
      </NavLink>
      <NavLink className={styles.link} to="/registration">
        Registration
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Login
      </NavLink>
    </ul>
  );
}

export default NavBar;
