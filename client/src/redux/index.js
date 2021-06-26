import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

//GET user info from localstorage
const localLoginData = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData'))
  : null;

//GET Stand Point For User from localstorage
const localStandPointUser = localStorage.getItem('stand-point-user')
  ? JSON.parse(localStorage.getItem('stand-point-user'))
  : null;

//POST Stand Point For Authority from localstorage
const localStandPointAuthority = localStorage.getItem('stand-point-authority')
  ? JSON.parse(localStorage.getItem('stand-point-authority'))
  : null;

//GET Users under Drive for Authority from localstorage
const localUsersUnderDriveAuthority = localStorage.getItem('userUnderDrive')
  ? JSON.parse(localStorage.getItem('userUnderDrive'))
  : null;

const initialState = {
  userLogin: {
    loading: false,
    error: null,
    data: localLoginData,
  },
  getStandPointUser: {
    loading: false,
    error: null,
    data: localStandPointUser,
  },
  postStandPointUser: {
    loading: false,
    error: null,
    data: localStandPointAuthority,
  },
  driveVaccine: {
    loading: false,
    error: null,
    data: localUsersUnderDriveAuthority,
  },
};

const middlewares = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
