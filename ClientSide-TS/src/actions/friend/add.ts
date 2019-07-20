import { Dispatch } from 'redux';
import { profileServiceInstance } from 'service/profile';
import { IState } from 'src/reducer';
import { failure } from './../module';

export const FRIEND_DATA = 'FRIEND/ADD';

export interface IFriendData {
  friend: number;
  type: typeof FRIEND_DATA;
}

export const addSuccess = (friend: number) => ({
  friend,
  type: FRIEND_DATA,
});

export const add = (user: number) => async (
  dispatch: Dispatch,
  getState: () => IState,
) => {
  try {
    const { token } = getState();
    await profileServiceInstance.addFreind(token.data, user);
    dispatch(addSuccess(user));
  } catch (error) {
    dispatch(failure(error));
  }
};
