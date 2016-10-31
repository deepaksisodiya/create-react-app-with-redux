/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/

console.log('here');

import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

let initialState = {
  counter:1,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      state = {
        ...state,
        counter: state.counter + 1,
      };
      break;
    case 'DECREMENT':
      state = {
        ...state,
        counter: state.counter - 1,
      };
      break;
  }
  return state;
};

let initialState2 = {
  name: 'Deepak',
  age: 25,
};

const UserReducer = (state = initialState2, action) => {
  switch (action.type) {
    case 'SET_NAME':
      state = {
        ...state,
        name: action.payload.name,
      };
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload.age,
      };
      break;
  }
  return state;
};

let rootReducer = combineReducers({
  CounterReducer,
  UserReducer,
});

let store = createStore(rootReducer, {}, applyMiddleware(logger()));

store.subscribe(() => {
  //console.log('state ', store.getState());
});

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'DECREMENT',
});

store.dispatch({
  type: 'SET_NAME',
  payload: {
    name:'chetan',
  }
});

store.dispatch({
  type: 'SET_AGE',
  payload: {
    age:12,
  }
});