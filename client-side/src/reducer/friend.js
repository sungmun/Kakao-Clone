import { LIST_SUCCESS, LIST_FAILURE } from 'actions/friend/list';
import { ADD_SUCCESS, ADD_FAILURE } from 'actions/friend/add';

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
    case ADD_SUCCESS:
      return {
        ...state,
        error: null,
        status: true,
        data: [...state.data, action.friend],
      };
    case ADD_FAILURE:
      return { ...state, error: action.message };
    default:
      return state;
  }
};
