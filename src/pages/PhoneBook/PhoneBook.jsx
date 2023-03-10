import FormAddContacts from 'modules/FormAddContacts/FormAddContacts';
import FilterContacts from 'modules/FilterContacts/FilterContacts';
import Contacts from 'modules/Contacts/Contacts';
import style from './PhoneBook.module.css';

function PhoneBook() {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>PhoneBook</h1>
      <FormAddContacts />
      <FilterContacts />
      <p className={style.text}>Contacts</p>
      <Contacts />
    </div>
  );
}

export default PhoneBook;
