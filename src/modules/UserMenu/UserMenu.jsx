import { selectUserEmail } from 'redux/userSlice/user-selectors';

function UserMenu() {
  return (
    <div>
      <p>{selectUserEmail}</p>
      <button>Logout</button>
    </div>
  );
}

export default UserMenu;
