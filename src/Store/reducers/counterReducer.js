import {ADD_ONE, SUBTRACT_ONE} from './../constants/counterConstants';
const counterReducer = (state = {value: 0}, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {...state, value: action.payload};

    case SUBTRACT_ONE:
      return {...state, value: action.payload};
    default:
      return state;
  }
};

export default counterReducer;
  