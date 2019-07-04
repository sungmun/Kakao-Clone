import { combineReducers } from 'redux';
import friend, { IFriendState } from './friend';
import header, { IHeaderState } from './header';
import profile, { IProfileState } from './profile';
import talkRoom, { ITalkroomState } from './talkRoom';
import token, { ITokenState } from './token';

export interface IState {
  token: ITokenState;
  profile: IProfileState;
  header: IHeaderState;
  friendList: IFriendState;
  talkRoomList: ITalkroomState;
}

export default combineReducers<IState>({
  token,
  profile,
  header,
  talkRoomList: talkRoom,
  friendList: friend,
});
