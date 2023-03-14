import { useSelector } from 'react-redux';
import { selectUser } from 'redux/userSlice/user-selectors';
import { useDispatch } from 'react-redux';
import { fetchLogOutUser } from 'redux/userSlice/userOperations';
import styles from './NavBarUser.module.css';

function NavBarUser() {
  const { email } = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLoginOut = () => {
    dispatch(fetchLogOutUser());
  };

  return (
    <div>
      <p>{email}</p>
      <button onClick={handleLoginOut}>Logout</button>
    </div>
  );
}
export default NavBarUser;
