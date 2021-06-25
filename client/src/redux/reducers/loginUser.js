import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
  } from '../action-types';
  
  const initialState = {
    loading: false,
    error: null,
    data: null,
  };
  
  const loginUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return { data: null, error: null, loading: true };
      case LOGIN_USER_SUCCESS:
        return { data: action.payload, error: null, loading: false };
      case LOGIN_USER_FAILURE:
        return { data: null, error: action.payload, loading: false };
      case LOGOUT_USER:
        return { data: null, error: null, loading: false };
      default:
        return state;
    }
  };
  
  export default loginUserReducer;
  