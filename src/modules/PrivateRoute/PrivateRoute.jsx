import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoginAndToken } from 'redux/userSlice/user-selectors';
import Loader from 'modules/Loader/Loader';
function PrivateRoute() {
  const { isLogin, token } = useSelector(selectLoginAndToken);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default PrivateRoute;
