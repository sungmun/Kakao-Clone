import { Dispatch } from 'redux';
import { profileServiceInstance } from 'service/profile';
import { addUserListSuccess } from 'src/actions/userList';
import { IState } from 'src/reducer';
import { failure } from './../module';

export const FRIEND_LIST_DATA = 'FRIEND/LIST';

export interface IFriendListData {
  friendList: number[];
  type: typeof FRIEND_LIST_DATA;
}

export const success = (friendList: number[]): IFriendListData => ({
  friendList,
  type: FRIEND_LIST_DATA,
});

export const list = () => async (
  dispatch: Dispatch,
  getState: () => IState,
) => {
  try {
    const { token } = getState();

    const friendList = await profileServiceInstance.getFriend(token.data);
    const friendIdList = friendList.map(val => val.id);

    dispatch(addUserListSuccess(friendList));
    dispatch(success(friendIdList));
  } catch (error) {
    dispatch(failure(error));
  }
};
