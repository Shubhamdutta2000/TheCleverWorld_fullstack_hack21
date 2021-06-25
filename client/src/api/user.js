import axios from 'axios';

const url = ``;

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const loginUser = (email, password) =>
  axios.post(`${url}/login`, { email, password }, config);

export const registerUser = (name, email, password, geometry, userLocation) =>
  axios.post(url, { name, email, password, geometry, userLocation }, config);


