import {
  ADD_TALKROOM,
  REMOVE_TALKROOM,
  LIST_TALKROOM_SUCCESS,
  LIST_TALKROOM_FAILURE,
} from 'actions/talkRoom';

const initstate = {
  error: null,
  status: false,
  data: [],
};

export default (state = initstate, action) => {
  switch (action.type) {
    case ADD_TALKROOM:
      return state.push(action.talkroom);
    case REMOVE_TALKROOM:
      return {
        ...state,
      };
    case LIST_TALKROOM_SUCCESS:
      return { ...state, data: action.talkRoomList, error: null, status: true };
    case LIST_TALKROOM_FAILURE:
      return { ...state, error: action.message };
    default:
      return state;
  }
};
