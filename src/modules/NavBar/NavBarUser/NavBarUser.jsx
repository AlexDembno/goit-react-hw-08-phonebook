import { useSelector } from 'react-redux';
import { selectUser } from 'redux/userSlice/user-selectors';
import { useDispatch } from 'react-redux';
import { fetchLogOutUser } from 'redux/userSlice/userOperations';
import styles from './NavBarUser.module.css';

function NavBarUser() {
  const { email } = useSelector(selectUser);

  const dispatch = useDispatch();

  const HandleLoginOut = () => {
    dispatch(fetchLogOutUser());
  };

  return (
    <div>
      <p>{email}</p>
      <button onClick={HandleLoginOut}>Logout</button>
    </div>
  );
}
export default NavBarUser;
