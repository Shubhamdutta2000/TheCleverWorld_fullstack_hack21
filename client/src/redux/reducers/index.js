import { combineReducers } from 'redux';
import userLoginReducer from './loginUser';
import registerUserReducer from './registerUser';


const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: registerUserReducer,
});

export default rootReducer;