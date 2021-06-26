import axios from 'axios';

const url = `http://localhost:5000`;

export const vaccineRegistration = (preferenceId, bearerToken) =>
  axios.post(
    `${url}/register-for-vaccine`,
    { preferenceId: preferenceId },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearerToken}`,
      },
    }
  );
