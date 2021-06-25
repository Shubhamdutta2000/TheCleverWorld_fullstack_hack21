import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
  } from '../action-types';
  
  const initialState = {
    loading: false,
    error: null,
    data: null,
  };
  
  const registerUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_USER:
        return { data: null, error: null, loading: true };
      case REGISTER_USER_SUCCESS:
        return { data: action.payload, error: null, loading: false };
      case REGISTER_USER_FAILURE:
        return { data: null, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default registerUserReducer;
  