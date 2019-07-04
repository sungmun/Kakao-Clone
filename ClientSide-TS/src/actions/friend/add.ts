import { Dispatch } from 'redux';
import { profileServiceInstance } from 'service/profile';
import { IUser } from 'src/interface/user.interface';
import { IState } from 'src/reducer';
import { failure } from './../module';

export const FRIEND_DATA = 'FRIEND/ADD';

export interface IFriendData {
  friend: IUser;
  type: typeof FRIEND_DATA;
}

export const addSuccess = (friend: IUser) => ({
  friend,
  type: FRIEND_DATA,
});

export const add = (user: IUser) => async (
  dispatch: Dispatch,
  getState: () => IState,
) => {
  try {
    const { token } = getState();
    await profileServiceInstance.addFreind(token.data, user.id);
    dispatch(addSuccess(user));
  } catch (error) {
    dispatch(failure(error));
  }
};
