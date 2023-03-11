import { combineReducers } from '@reduxjs/toolkit';

import contactsSlice from './contactsSlice/contacts-slice';
import filterSlise from './filterSlise/filter-slise';
import userSlice from './userSlice/user-slice';

export const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filterSlise,
  user: userSlice,
});
