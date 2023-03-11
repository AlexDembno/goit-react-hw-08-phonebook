import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'redux/userSlice/user-selectors';
import LoginForm from 'modules/LoginForm/LoginForm';

function Login() {
  const isLogin = useSelector(selectIsLogin);
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <p>Login</p>
      <LoginForm />
    </div>
  );
}

export default Login;
