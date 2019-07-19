import { combineReducers } from 'redux';
import friend, { IFriendState } from './friend';
import header, { IHeaderState } from './header';
import profile, { IProfileState } from './profile';
import talkRoom, { ITalkroomState } from './talkRoom';
import token, { ITokenState } from './token';
import userList, { IUserListState } from './userList';

export interface IState {
  token: ITokenState;
  profile: IProfileState;
  header: IHeaderState;
  userList: IUserListState;
  friendList: IFriendState;
  talkRoomList: ITalkroomState;
}

export default combineReducers<IState>({
  token,
  profile,
  header,
  userList,
  talkRoomList: talkRoom,
  friendList: friend,
});
