import { SET_MODE, MODE_BASE } from 'actions/header';

const initstate = {
  mode: MODE_BASE,
};

export default (state = initstate, action) => {
  switch (action.type) {
    case SET_MODE:
      return { ...state, mode: action.mode };
    default:
      return state;
  }
};
