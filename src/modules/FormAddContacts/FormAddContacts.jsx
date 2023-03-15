import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllContacts,
  fetchAddContacts,
} from 'redux/contactsSlice/contactOperations';

import { selectContacts } from 'redux/contactsSlice/contacts-selectors';
import Input from 'shared/components/Input/Input';
import Button from 'shared/components/Button/Button';
import styles from './FormAddContacts.module.css';

function FormAddContacts() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    addContacts({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const findDublicate = name => {
    const result = contacts.find(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );
    return result;
  };

  const addContacts = ({ name, number }) => {
    if (findDublicate(name, number)) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(fetchAddContacts({ name, number }));
  };

  const handleChangeInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <Input
          onChange={handleChangeInput}
          type={'text'}
          name={'name'}
          value={name}
          placeholder={'Enter name'}
        />
      </label>
      <label>
        <Input
          onChange={handleChangeInput}
          type={'tel'}
          name={'number'}
          value={number}
          placeholder={'Enter number'}
        />
      </label>
      <Button name={'Add contact'} type={'submit'} />
    </form>
  );
}

export default FormAddContacts;
