import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

//GET user info from localstorage
const localLoginData = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData'))
  : null;

const initialState = {
  userLogin: {
    loading: false,
    error: null,
    data: localLoginData,
  },
};

const middlewares = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
