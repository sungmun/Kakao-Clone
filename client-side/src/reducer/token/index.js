import { SET_TOKEN } from 'actions/token';

const initstate = window.localStorage.getItem('token');

export default (state = initstate, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      const { token } = action;
      window.localStorage.setItem('token', token);
      return token;
    }
    default:
      return state;
  }
};
