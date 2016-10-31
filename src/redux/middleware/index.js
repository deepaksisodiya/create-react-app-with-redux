/**
 * Created by deepaksisodiya on 31/10/16.
 */


import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import CounterReducer from './../modules/counter';
import UserReducer from './../modules/user';

let rootReducer = combineReducers({
  CounterReducer,
  UserReducer,
});

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger())
);

export default store;