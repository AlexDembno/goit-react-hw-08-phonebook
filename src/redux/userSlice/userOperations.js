import * as api from '../../shared/services/user-Api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCreateUser = createAsyncThunk(
  'user/fetch-create-user',
  async (data, thunkApi) => {
    try {
      const response = await api.createUser(data);
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

export const fetchCurrentUser = createAsyncThunk(
  'user/fetch-current-user',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const response = await api.currentUser(user.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { user } = getState();
      if (!user.token) {
        return false;
      }
    },
  }
);

export const fetchLogOutUser = createAsyncThunk(
  'user/fetch-logout',
  async (_, thunkApi) => {
    try {
      const response = await api.logOutUser();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
