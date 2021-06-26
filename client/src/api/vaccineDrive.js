import axios from 'axios';

const url = `http://localhost:5000/api/authorities`;

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
