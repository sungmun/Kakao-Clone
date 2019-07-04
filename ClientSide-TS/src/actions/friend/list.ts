import { Dispatch } from 'redux';
import { profileServiceInstance } from 'service/profile';
import { IUser } from 'src/interface/user.interface';
import { IState } from 'src/reducer';
import { failure } from './../module';

export const FRIEND_LIST_DATA = 'FRIEND/LIST';

export interface IFriendListData {
  friendList: IUser[];
  type: typeof FRIEND_LIST_DATA;
}

export const success = (friendList: IUser[]): IFriendListData => ({
  friendList,
  type: FRIEND_LIST_DATA,
});

export const list = () => async (
  dispatch: Dispatch,
  getState: () => IState,
) => {
  try {
    const { token } = getState();

    const friend = await profileServiceInstance.getFriend(token.data);

    dispatch(success(friend));
  } catch (error) {
    dispatch(failure(error));
  }
};
