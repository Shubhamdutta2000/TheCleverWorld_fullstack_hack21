import {
  GET_STAND_POINT_USER_REQUEST,
  GET_STAND_POINT_USER_SUCCESS,
  GET_STAND_POINT_USER_FAILURE,
} from '../action-types/';

import { getStandPoint } from '../../api/standPoint';

export const getStandPointUserAction = () => async (dispatch) => {
  dispatch({ type: GET_STAND_POINT_USER_REQUEST });
  try {
    const { data } = await getStandPoint();
    console.log(data);
    dispatch({
      type: GET_STAND_POINT_USER_SUCCESS,
      payload: data,
    });

    //   set stand-point-user in localStorage
    localStorage.setItem('stand-point-user', JSON.stringify(data));
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
