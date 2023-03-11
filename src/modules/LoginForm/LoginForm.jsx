import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLoginUser } from 'redux/userSlice/userOperations';

import Button from 'shared/components/Button/Button';
import styles from './LoginForm.module.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPasword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      fetchLoginUser({
        email: email,
        password: password,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <input
          type="email"
          className={styles.input}
          name="email"
          value={email}
          required
          placeholder="Enter email"
          onChange={handleChangeInput}
        />
      </label>
      <label>
        <input
          type="password"
          className={styles.input}
          name="password"
          value={password}
          required
          placeholder="Enter password"
          onChange={handleChangeInput}
        />
      </label>
      <Button onSubmit={'Submit'} />
    </form>
  );
}

export default LoginForm;
