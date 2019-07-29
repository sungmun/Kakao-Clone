import { combineReducers } from 'redux';
import profile, { IProfileState } from './profile';
import talkRoom, { ITalkroomState } from './talkRoom';
import token, { ITokenState } from './token';
import friend, { FriendState } from './friend';
import header, { HeaderState } from './header';

export interface IState {
  token: ITokenState;
  profile: IProfileState;
  talkRoomList: ITalkroomState;
  header: HeaderState;
  friendList: FriendState;
}

export default combineReducers<IState>({
  token,
  profile,
  header,
  talkRoomList: talkRoom,
  friendList: friend,
});
