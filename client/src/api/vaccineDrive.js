import axios from 'axios';

const url = `https://easyjaber-server.herokuapp.com/api/authorities`;

export const vaccineDrive = (driveStandPoints, bearerToken) =>
  axios.post(
    `${url}/createDrive`,
    { driveStandPoints: driveStandPoints },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearerToken}`,
      },
    }
  );
