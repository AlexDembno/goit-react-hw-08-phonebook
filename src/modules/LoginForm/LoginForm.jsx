import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLoginUser } from 'redux/userSlice/userOperations';

import Button from 'shared/components/Button/Button';
import Input from 'shared/components/Input/Input';
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
        email,
        password,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <Input
          type={'email'}
          name={'email'}
          value={email}
          placeholder={'Enter email'}
          onChange={handleChangeInput}
        />
      </label>
      <label>
        <Input
          type={'password'}
          name={'password'}
          value={password}
          placeholder={'Enter password'}
          onChange={handleChangeInput}
        />
      </label>
      <Button name={'Submit'} type={'Submit'} />
    </form>
  );
}

export default LoginForm;
