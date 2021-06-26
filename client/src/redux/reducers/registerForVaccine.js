import {
  REGISTER_FOR_VACCINE_REQUEST,
  REGISTER_FOR_VACCINE_SUCCESS,
  REGISTER_FOR_VACCINE_FAILURE,
} from '../action-types';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const registerForVaccine = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_FOR_VACCINE_REQUEST:
      return { data: null, error: null, loading: true };
    case REGISTER_FOR_VACCINE_SUCCESS:
      return { data: action.payload, error: null, loading: false };
    case REGISTER_FOR_VACCINE_FAILURE:
      return { data: null, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default registerForVaccine;
