import { combineReducers } from 'redux';
import token, { ITokenState } from './token';
import friend, { FriendState } from './friend';
import header, { HeaderState } from './header';
import profile, { ProfileState } from './profile';
import talkRoom, { TalkRoomState } from './talkRoom';

export interface IState {
  token: ITokenState;
  header: HeaderState;
  profile: ProfileState;
  friendList: FriendState;
  talkRoomList: TalkRoomState;
}

export default combineReducers<IState>({
  token,
  header,
  profile,
  talkRoomList: talkRoom,
  friendList: friend,
});
