import { combineReducers } from 'redux';
import userLoginReducer from './loginUser';
import registerUserReducer from './registerUser';
import getStandPointUserReducer from './getStandPointUser';
import postStandPointAuthorityReducer from './postStandPointAuthority';
import registerForVaccineReducer from './registerForVaccine';
import driveVaccineReducer from './driveVaccine';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: registerUserReducer,
  getStandPointUser: getStandPointUserReducer,
  registerForVaccine: registerForVaccineReducer,
  postStandPointUser: postStandPointAuthorityReducer, // For AUTHORITY
  driveVaccine: driveVaccineReducer, // For AUTHORITY
});

export default rootReducer;
