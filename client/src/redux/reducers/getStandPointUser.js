import {
  GET_STAND_POINT_USER_REQUEST,
  GET_STAND_POINT_USER_SUCCESS,
  GET_STAND_POINT_USER_FAILURE,
} from '../action-types';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const getStandPointUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_STAND_POINT_USER_REQUEST:
      return { data: null, error: null, loading: true };
    case GET_STAND_POINT_USER_SUCCESS:
      return { data: action.payload, error: null, loading: false };
    case GET_STAND_POINT_USER_FAILURE:
      return { data: null, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default getStandPointUser;
