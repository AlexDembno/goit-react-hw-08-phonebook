import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoginAndToken } from 'redux/userSlice/user-selectors';

function PublicRoute() {
  const { isLogin, token } = useSelector(selectLoginAndToken);

  if (!isLogin && token) {
    return <p>...loading</p>;
  }

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
}

export default PublicRoute;
