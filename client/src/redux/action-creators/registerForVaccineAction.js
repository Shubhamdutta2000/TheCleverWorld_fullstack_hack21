import {
  REGISTER_FOR_VACCINE_REQUEST,
  REGISTER_FOR_VACCINE_SUCCESS,
  REGISTER_FOR_VACCINE_FAILURE,
} from '../action-types/';

import { vaccineRegistration } from '../../api/vaccineRegistration';

export const registerForVaccineAction =
  (preferenceId) => async (dispatch, getState) => {
    dispatch({ type: REGISTER_FOR_VACCINE_REQUEST });
    try {
      const {
        userLogin: { data },
      } = getState();

      const { data: registeredUser } = await vaccineRegistration(
        preferenceId,
        data.token
      );
      console.log(data);
      dispatch({
        type: REGISTER_FOR_VACCINE_SUCCESS,
        payload: registeredUser,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FOR_VACCINE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
