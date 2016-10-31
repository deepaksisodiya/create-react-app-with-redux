/**
 * Created by deepaksisodiya on 31/10/16.
 */


let initialState = {
  name: 'Deepak',
  age: 25,
};

const UserReducer = (state = initialState, action) => {
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

export default UserReducer;