import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCreateUser } from 'redux/userSlice/userOperations';

import Button from 'shared/components/Button/Button';
import styles from './RegisterForm.module.css';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
      fetchCreateUser({
        name: name,
        email: email,
        password: password,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <input
          type="text"
          className={styles.input}
          name="name"
          value={name}
          required
          placeholder="Enter name"
          onChange={handleChangeInput}
        />
      </label>
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

export default RegisterForm;
