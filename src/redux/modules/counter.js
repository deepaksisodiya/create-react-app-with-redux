/**
 * Created by deepaksisodiya on 31/10/16.
 */


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

export default CounterReducer;