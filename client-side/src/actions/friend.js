import { getFriend } from 'service/profile';

export const LIST_FRIEND_SUCCESS = 'LIST_FRIEND_SUCCESS';
export const LIST_FRIEND_FAILURE = 'LIST_FRIEND_FAILURE';

export const listFriendFailure = message => ({
  type: LIST_FRIEND_FAILURE,
  message,
});

export const listFriendSuccess = friendList => ({
  type: LIST_FRIEND_SUCCESS,
  friendList,
});

export const listFriend = () => async (dispatch, getState) => {
  try {
    const { token } = getState();

    const friend = await getFriend(token.data);
    dispatch(listFriendSuccess(friend));
  } catch (error) {
    dispatch(listFriendFailure(error));
  }
};

// export const ADD_FREIND = 'ADD_FREIND';
// export const REMOVE_FREIND = 'REMOVE_FREIND';
// export const SEARCH_FREIND = 'SEARCH_FREIND';

// export const searchFreind = id => async (dispatch,{token})=>{};
// export const removeFreind = friend => ({ action: REMOVE_FREIND, friend });
// export const addFreind = friend => {};
