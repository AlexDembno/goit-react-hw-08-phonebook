import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/userSlice/user-selectors';
import NavBarAuth from './NavBarAuth/NavBarAuth';
import NavBarUser from './NavBarUser/NavBarUser';
import Loader from 'modules/Loader/Loader';
import { selectIsLoadingCont } from 'redux/contactsSlice/contacts-selectors';
import { selectIsLoadingUser } from 'redux/userSlice/user-selectors';
import styles from './Navbar.module.css';

function NavBar() {
  const isLoding = useSelector(selectIsLogin);
  const isLoadingCont = useSelector(selectIsLoadingCont);
  const isLoadingUser = useSelector(selectIsLoadingUser);

  return (
    <ul className={styles.list}>
      {(isLoadingCont || isLoadingUser) && <Loader />}
      <NavLink className={styles.link} to="/"></NavLink>
      <NavLink className={styles.link} to="/contacts"></NavLink>

      {isLoding ? <NavBarUser className={styles.link} /> : <NavBarAuth />}
    </ul>
  );
}

export default NavBar;
