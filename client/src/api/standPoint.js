import axios from 'axios';

const url1 = `http://localhost:5000/api/users`;
const url2 = `http://localhost:5000/api/authorities`;

export const getStandPoint = (bearerToken) =>
  axios.get(`${url1}/get-stand-points`, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });

export const postStandPoint = (selectedPoints, bearerToken) =>
  axios.post(
    `${url2}/create-stand-point`,
    { selectedPoints: selectedPoints },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearerToken}`,
      },
    }
  );
