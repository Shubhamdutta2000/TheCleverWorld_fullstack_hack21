import axios from 'axios';

const url = `https://easyjaber-server.herokuapp.com/api/users`;

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
