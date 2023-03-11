import { NavLink } from 'react-router-dom';

import styles from './NavBarAuth.module.css';

function NavBarAuth() {
  return (
    <div>
      <NavLink className={styles.link} to="/registration">
        Registration
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Login
      </NavLink>
    </div>
  );
}

export default NavBarAuth;
