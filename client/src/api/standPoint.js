import axios from 'axios';

const url = `http://localhost:5000`;

export const getStandPoint = (bearerToken) =>
  axios.get(`${url}/get-stand-points`, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
