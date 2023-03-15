import LoginForm from 'modules/LoginForm/LoginForm';
import styles from './Login.module.css';
function Login() {
  return (
    <div className={styles.wrapper}>
      <LoginForm />
    </div>
  );
}

export default Login;
