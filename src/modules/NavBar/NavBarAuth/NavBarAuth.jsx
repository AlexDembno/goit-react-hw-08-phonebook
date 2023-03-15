import { NavLink } from 'react-router-dom';
import Button from 'shared/components/Button/Button';

import styles from './NavBarAuth.module.css';

function NavBarAuth() {
  return (
    <div className={styles.wrapper}>
      <NavLink className={styles.link} to="/registration">
        <Button name={'Registration'} type={'button'} />
      </NavLink>
      <NavLink className={styles.link} to="/login">
        <Button name={'Login'} type={'button'} />
      </NavLink>
    </div>
  );
}

export default NavBarAuth;
