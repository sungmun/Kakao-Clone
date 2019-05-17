import { listTalkRoom } from 'service/talkRoom';

export const ADD_TALKROOM = 'ADD_TALKROOM';
export const REMOVE_TALKROOM = 'REMOVE_TALKROOM';

export const LIST_TALKROOM_SUCCESS = 'LIST_TALKROOM_SUCCESS';
export const LIST_TALKROOM_FAILURE = 'LIST_TALKROOM_FAILURE';

export const listTalkroomSuccess = talkRoomList => ({
  type: LIST_TALKROOM_SUCCESS,
  talkRoomList,
});

export const listTalkroomFailure = message => ({
  message,
  type: LIST_TALKROOM_FAILURE,
});

export const listTalkroom = () => async (dispatch, getState) => {
  const { token } = getState();
  try {
    const talkRoomList = await listTalkRoom(token.data);
    dispatch(listTalkroomSuccess(talkRoomList));
  } catch (error) {
    dispatch(listTalkroomFailure(error));
  }
};

export const addTalkRoom = talkRoom => {
  return {
    type: ADD_TALKROOM,
    talkRoom,
  };
};

export const removeTalkRoom = talkRoom => {
  return {
    type: REMOVE_TALKROOM,
    talkRoom,
  };
};
