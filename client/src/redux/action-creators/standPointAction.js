import {
  GET_STAND_POINT_USER_REQUEST,
  GET_STAND_POINT_USER_SUCCESS,
  GET_STAND_POINT_USER_FAILURE,
} from '../action-types/';

import { getStandPoint } from '../../api/standPoint';

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
