import { combineReducers } from 'redux';
import token from './token';
import profile from './profile';
import friendList from './friend';
import talkRoomList from './talkRoom';
import header from './header';

export default combineReducers({
  token,
  profile,
  talkRoomList,
  friendList,
  header,
});
