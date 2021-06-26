import axios from 'axios';

const url = `http://localhost:5000/api/users`;

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const loginUser = (email, password) =>
  axios.post(`${url}/login`, { email, password }, config);

export const registerUser = (
  name,
  email,
  password,
  geometry,
  phoneNumber,
  adhaarNumber
) =>
  axios.post(
    `${url}/signup`,
    { name, email, password, geometry, phoneNumber, adhaarNumber },
    config
  );
