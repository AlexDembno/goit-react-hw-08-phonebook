import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'redux/userSlice/user-selectors';
import RegisterForm from 'modules/RegisterForm/RegisterForm';

function RegistrationPage() {
  const isLogin = useSelector(selectIsLogin);
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <p>Registration</p>
      <RegisterForm />
    </div>
  );
}

export default RegistrationPage;
