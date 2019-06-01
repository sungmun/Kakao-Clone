import { getFriend } from 'service/profile';

export const LIST_SUCCESS = 'LIST_SUCCESS';
export const LIST_FAILURE = 'LIST_FAILURE';

export const Failure = message => ({
  type: LIST_FAILURE,
  message,
});

export const Success = friendList => ({
  type: LIST_SUCCESS,
  friendList,
});

export const list = () => async (dispatch, getState) => {
  try {
    const { token } = getState();

    const friend = await getFriend(token.data);
    dispatch(Success(friend));
  } catch (error) {
    dispatch(Failure(error));
  }
};
