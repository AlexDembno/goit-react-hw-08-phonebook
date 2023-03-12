import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import contactsSlice from './contactsSlice/contacts-slice';
import filterSlise from './filterSlise/filter-slise';
import userSlice from './userSlice/user-slice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, userSlice);

export const rootReducer = combineReducers({
  user: persistedReducer,
  contacts: contactsSlice,
  filter: filterSlise,
});
