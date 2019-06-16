import { SET_TOKEN_SUCCESS, SET_TOKEN_FAILURE } from 'actions/token';

const initstate = {
  error: null,
  status: false,
  data: window.localStorage.getItem('token'),
};

export default (state = initstate, action) => {
  switch (action.type) {
    case SET_TOKEN_SUCCESS: {
      window.localStorage.setItem('token', action.token);

      return { ...state, status: true, data: action.token };
    }
    case SET_TOKEN_FAILURE: {
      window.localStorage.removeItem('token');
      return { ...state, statue: false, error: action.message };
    }
    default:
      return state;
  }
};
