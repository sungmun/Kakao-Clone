import { combineReducers } from 'redux';
import friend, { FriendState } from './friend';
import header, { HeaderState } from './header';
import profile, { ProfileState } from './profile';
import talkRoom, { TalkRoomState } from './talkRoom';
import token, { TokenState } from './token';

export interface IState {
  token: TokenState;
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
