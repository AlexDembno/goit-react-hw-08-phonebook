import RegisterForm from 'modules/RegisterForm/RegisterForm';

import styles from './RegistrationPage.module.css';

function RegistrationPage() {
  return (
    <div className={styles.wrapper}>
      <RegisterForm />
    </div>
  );
}

export default RegistrationPage;
