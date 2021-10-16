import {
  AUTH_ERROR,
  AUTH_REQUEST,
  AUTH_SUCCESS,
} from './../constants/authContants';
import axios from 'axios';
import {BaseUrl} from './../../Config/index';

export const login = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({type: AUTH_REQUEST});
    const {
      data: {token, data: data_core},
    } = await axios.post(`${BaseUrl}/auth/login`, {email, password});
    const {
      user: {id, email: coreEmail},
    } = data_core;
    dispatch({
      type: AUTH_SUCCESS,
      payload: {token: token, email: coreEmail, userId: id},
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};
export const signup = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({type: AUTH_REQUEST});
    const {
      data: {token, data: data_core},
    } = await axios.post(`${BaseUrl}/auth/signup`, {email, password});
    const {
      user: {id, email: coreEmail},
    } = data_core;
    dispatch({
      type: AUTH_SUCCESS,
      payload: {token: token, email: coreEmail, userId: id},
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};
