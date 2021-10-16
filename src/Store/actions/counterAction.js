import {ADD_ONE, SUBTRACT_ONE} from './../constants/counterConstants';
const addOne = () => async (dispatch, getState) => {
  let {
    counter: {value},
  } = getState();

  dispatch({type: ADD_ONE, payload: value + 1});
};

const subtractOne = () => async (dispatch, getState) => {
  let {
    counter: {value},
  } = getState();
  dispatch({type: SUBTRACT_ONE, payload: value - 1});
};

export {addOne, subtractOne};
