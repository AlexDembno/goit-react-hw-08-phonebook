import { createSlice } from '@reduxjs/toolkit';
import { fetchCreateUser, fetchLoginUser } from './userOperations';

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
      });
  },
});

export default userSlice.reducer;
