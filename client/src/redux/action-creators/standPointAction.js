import {
  GET_STAND_POINT_USER_REQUEST,
  GET_STAND_POINT_USER_SUCCESS,
  GET_STAND_POINT_USER_FAILURE,
  POST_STAND_POINT_AUTHORITY_REQUEST,
  POST_STAND_POINT_AUTHORITY_SUCCESS,
  POST_STAND_POINT_AUTHORITY_FAILURE,
} from '../action-types/';

import { getStandPoint, postStandPoint } from '../../api/standPoint';
import { vaccineDrive } from '../../api/vaccineDrive';

export const getStandPointUserAction = () => async (dispatch, getState) => {
  dispatch({ type: GET_STAND_POINT_USER_REQUEST });
  try {
    const {
      userLogin: { data },
    } = getState();

    console.log('stand');

    const { data: standPointDetails } = await getStandPoint(data.token);
    console.log(standPointDetails);

    dispatch({
      type: GET_STAND_POINT_USER_SUCCESS,
      payload: standPointDetails,
    });

    //   set stand-point-user in localStorage
    localStorage.setItem('stand-point-user', JSON.stringify(standPointDetails));
  } catch (error) {
    dispatch({
      type: GET_STAND_POINT_USER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postStandPointUserAction =
  (driveStandPoints) => async (dispatch, getState) => {
    dispatch({ type: POST_STAND_POINT_AUTHORITY_REQUEST });
    try {
      const {
        userLogin: { data },
      } = getState();

      const { data: standPointDetails } = await vaccineDrive(
        driveStandPoints,
        data.token
      );
      console.log(standPointDetails);

      dispatch({
        type: POST_STAND_POINT_AUTHORITY_SUCCESS,
        payload: standPointDetails,
      });
    } catch (error) {
      dispatch({
        type: POST_STAND_POINT_AUTHORITY_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
