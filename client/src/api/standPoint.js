import axios from 'axios';

const url1 = `https://easyjaber-server.herokuapp.com/api/users`;
const url2 = `https://easyjaber-server.herokuapp.com/api/authorities`;

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
