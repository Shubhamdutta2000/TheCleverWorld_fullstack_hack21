import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

//GET user info from localstorage
const localLoginData = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData'))
  : null;

//GET user info from localstorage
const localStandPointUser = localStorage.getItem('stand-point-user')
  ? JSON.parse(localStorage.getItem('stand-point-user'))
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
};

const middlewares = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
