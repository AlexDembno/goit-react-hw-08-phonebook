import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoginAndToken } from 'redux/userSlice/user-selectors';

function PrivateRoute() {
  const { isLogin, token } = useSelector(selectLoginAndToken);

  if (!isLogin && token) {
    return <p>...loading</p>;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default PrivateRoute;
