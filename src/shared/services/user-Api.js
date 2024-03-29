import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  return (instance.defaults.headers.authorization = '');
};

export const createUser = async data => {
  const response = await instance.post('/users/signup', data);
  setToken(response.data.token);
  return response.data;
};

export const loginUser = async data => {
  const response = await instance.post('/users/login', data);
  setToken(response.data.token);
  return response.data;
};

export const currentUser = async token => {
  try {
    setToken(token);
    const response = await instance.get('/users/current');
    return response.data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export default instance;

export const logOutUser = async () => {
  const response = await instance.post('/users/logout');
  setToken();
  return response.data;
};
