import { addFreind } from 'service/profile';

export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const addSuccess = friend => ({
  type: ADD_SUCCESS,
  friend,
});

export const addFailure = message => ({
  type: ADD_FAILURE,
  message,
});

export const add = user => async (dispatch, getState) => {
  try {
    const { token } = getState();
    await addFreind(token.data, user.id);
    dispatch(addSuccess(user));
  } catch (error) {
    console.log(error);
    dispatch(addFailure(error));
  }
};
