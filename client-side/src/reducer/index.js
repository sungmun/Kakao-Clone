import { combineReducers } from 'redux';
import token from './token';
import profile from './profile';
import friendList from './friend';
import talkRoomList from './talkRoom';

export default combineReducers({ token, profile, talkRoomList, friendList });
