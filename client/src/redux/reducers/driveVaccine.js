import {
  DRIVE_VACCINE_REQUEST,
  DRIVE_VACCINE_SUCCESS,
  DRIVE_VACCINE_FAILURE,
} from '../action-types';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const driveVaccine = (state = initialState, action) => {
  switch (action.type) {
    case DRIVE_VACCINE_REQUEST:
      return { data: null, error: null, loading: true };
    case DRIVE_VACCINE_SUCCESS:
      return { data: action.payload, error: null, loading: false };
    case DRIVE_VACCINE_SUCCESS:
      return { data: null, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default driveVaccine;
