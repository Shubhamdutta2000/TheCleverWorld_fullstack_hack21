import {
  POST_STAND_POINT_AUTHORITY_REQUEST,
  POST_STAND_POINT_AUTHORITY_SUCCESS,
  POST_STAND_POINT_AUTHORITY_FAILURE,
} from '../action-types';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const postStandPointAuthority = (state = initialState, action) => {
  switch (action.type) {
    case POST_STAND_POINT_AUTHORITY_REQUEST:
      return { data: null, error: null, loading: true };
    case POST_STAND_POINT_AUTHORITY_SUCCESS:
      return { data: action.payload, error: null, loading: false };
    case POST_STAND_POINT_AUTHORITY_FAILURE:
      return { data: null, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default postStandPointAuthority;
