import { login } from 'service/profile';

export const SET_TOKEN_SUCCESS = 'SET_TOKEN_SUCCESS';
export const SET_TOKEN_FAILURE = 'SET_TOKEN_FAILURE';

export const setTokenSuccess = token => {
  return {
    type: SET_TOKEN_SUCCESS,
    token,
  };
};

export const setTokenFailure = message => {
  return {
    type: SET_TOKEN_FAILURE,
    message,
  };
};

export const setToken = user => async dispatch => {
  try {
    const token = await login(user);

    dispatch(setTokenSuccess(token));
  } catch (error) {
    dispatch(setTokenFailure(error));
  }
};
