import { LIST_SUCCESS, LIST_FAILURE } from 'actions/friend/list';

const initstate = {
  error: null,
  status: false,
  data: [],
};

export default (state = initstate, action) => {
  switch (action.type) {
    case LIST_SUCCESS:
      return { ...state, error: null, status: true, data: action.friendList };
    case LIST_FAILURE:
      return { ...state, error: action.message };
    default:
      return state;
  }
};
