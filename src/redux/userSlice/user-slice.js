import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCreateUser,
  fetchLoginUser,
  fetchCurrentUser,
  fetchLogOutUser,
} from './userOperations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    token: '',
    isLogin: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCreateUser.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchCreateUser.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.user = payload.user;
        store.token = payload.token;
        store.isLogin = true;
      })
      .addCase(fetchCreateUser.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchLoginUser.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchLoginUser.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.user = payload.user;
        store.token = payload.token;
        store.isLogin = true;
      })
      .addCase(fetchLoginUser.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchCurrentUser.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.user.name = payload.name;
        store.user.email = payload.email;
        store.token = payload.token;
        store.isLogin = true;
      })
      .addCase(fetchCurrentUser.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchLogOutUser.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchLogOutUser.fulfilled, store => {
        store.isLoading = false;
        store.user = {};
        store.token = '';
        store.isLogin = false;
      })
      .addCase(fetchLogOutUser.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default userSlice.reducer;
