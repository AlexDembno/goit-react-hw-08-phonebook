import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteContacts } from 'redux/contactsSlice/contactOperations';
import { selectContacts } from 'redux/contactsSlice/contacts-selectors';
import { selectFilter } from 'redux/filterSlise/filter-selectors';
import styles from './Contacts.module.css';
import Button from 'shared/components/Button/Button';

function Contacts() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const findName = () => {
    if (!filter) {
      return contacts;
    }
    const result = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return result;
  };

  const filterName = findName();

  const deleteNumber = contactId => {
    dispatch(fetchDeleteContacts(contactId));
  };

  return (
    <>
      {filterName.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.columb}>N</th>
              <th className={styles.columb}>Name</th>
              <th className={styles.columb}>Tel</th>
              <th className={styles.columb}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filterName.map(({ id, name, number }, index) => (
              <tr key={id}>
                <td className={styles.text}>{index + 1}</td>
                <td className={styles.text}>{name}</td>
                <td className={styles.text}>{number}</td>
                <td>
                  <Button
                    onClick={() => deleteNumber(id)}
                    name={'Delete'}
                    type={'button'}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={styles.text}>No contacts</p>
      )}
    </>
  );
}

export default Contacts;
