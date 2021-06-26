import axios from 'axios';

const url = `http://localhost:5000/api/authorities`;

export const getStandPoint = (bearerToken) =>
  axios.get(`${url}/get-stand-points`, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });

export const postStandPoint = (selectedPoints, bearerToken) =>
  axios.post(
    `${url}/create-stand-point`,
    { selectedPoints: selectedPoints },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearerToken}`,
      },
    }
  );
