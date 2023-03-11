import { useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/userSlice/user-selectors';
import styles from './NavBarUser.module.css';

function NavBarUser() {
  const { email } = useSelector(selectUserEmail);

  return (
    <div>
      <p>{email}</p>
      <button>Logout</button>
    </div>
  );
}
export default NavBarUser;
