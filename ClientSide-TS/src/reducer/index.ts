import { combineReducers } from 'redux';
import talkRoom, { ITalkroomState } from './talkRoom';
import token, { ITokenState } from './token';
import friend, { FriendState } from './friend';
import header, { HeaderState } from './header';
import profile, { ProfileState } from './profile';

export interface IState {
  token: ITokenState;
  profile: IProfileState;
  talkRoomList: ITalkroomState;
  header: HeaderState;
  profile: ProfileState;
  friendList: FriendState;
}

export default combineReducers<IState>({
  token,
  header,
  profile,
  talkRoomList: talkRoom,
  friendList: friend,
});
