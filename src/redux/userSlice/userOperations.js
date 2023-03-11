import * as api from '../../shared/services/user-Api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCreateUser = createAsyncThunk(
  'user/fetch-create-user',
  async (data, thunkApi) => {
    try {
      const response = await api.createUser(data);
      console.log(response);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchLoginUser = createAsyncThunk(
  'user/fetch-login',
  async (data, thunkApi) => {
    try {
      const response = await api.loginUser(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
