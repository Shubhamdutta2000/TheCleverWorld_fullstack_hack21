import {
  DRIVE_VACCINE_REQUEST,
  DRIVE_VACCINE_SUCCESS,
  DRIVE_VACCINE_FAILURE,
} from '../action-types/';

import { vaccineDrive } from '../../api/vaccineDrive.js';

export const driveVaccineAction =
  (driveStandPoints) => async (dispatch, getState) => {
    dispatch({ type: DRIVE_VACCINE_REQUEST });
    try {
      const {
        userLogin: { data },
      } = getState();

      const { data: usersUnderDrive } = await vaccineDrive(
        driveStandPoints,
        data.token
      );
      console.log(usersUnderDrive);

      dispatch({
        type: DRIVE_VACCINE_SUCCESS,
        payload: usersUnderDrive,
      });

      //   set userUnderDrive in localStorage
      localStorage.setItem('userUnderDrive', JSON.stringify(usersUnderDrive));
    } catch (error) {
      dispatch({
        type: DRIVE_VACCINE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
