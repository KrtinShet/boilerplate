import {
  AUTH_ERROR,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR_CLEAR,
} from '../constants/authContants';

const authReducer = (state = {token: '', email: '', userId: ''}, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {...state, loading: true};
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        email: action.payload.email,
        userId: action.payload.userId,
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case AUTH_ERROR_CLEAR:
      return {
        ...state,
        loading: false,
        error: undefined,
      };
    default:
      return state;
  }
};

export default authReducer;
