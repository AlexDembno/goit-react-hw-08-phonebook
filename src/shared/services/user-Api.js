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
  console.log(response.data.token);
  return response.data;
};

export const loginUser = async data => {
  const response = await instance.post('/users/login', data);
  setToken(response.data.token);
  console.log(response.data.token);
  return response.data;
};

export default instance;
