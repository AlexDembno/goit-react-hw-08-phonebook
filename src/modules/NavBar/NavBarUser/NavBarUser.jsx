import { useSelector } from 'react-redux';
import { selectUser } from 'redux/userSlice/user-selectors';
import { useDispatch } from 'react-redux';
import { fetchLogOutUser } from 'redux/userSlice/userOperations';
import Button from 'shared/components/Button/Button';

import styles from './NavBarUser.module.css';
function NavBarUser() {
  const { email } = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLoginOut = () => {
    dispatch(fetchLogOutUser());
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{email}</p>
      <Button onClick={handleLoginOut} name={'Logout'} type={'button'} />
    </div>
  );
}
export default NavBarUser;
