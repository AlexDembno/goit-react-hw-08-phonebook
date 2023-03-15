import { filterContact } from 'redux/filterSlise/filter-slise';
import { useDispatch } from 'react-redux';
import Input from 'shared/components/Input/Input';

function FilterContacts() {
  const dispatch = useDispatch();
  const handleChangeFilter = e => {
    const action = filterContact(e.currentTarget.value);
    dispatch(action);
  };
  return (
    <label>
      <Input
        onChange={handleChangeFilter}
        type={'text'}
        placeholder={'Find name'}
      />
    </label>
  );
}

export default FilterContacts;
