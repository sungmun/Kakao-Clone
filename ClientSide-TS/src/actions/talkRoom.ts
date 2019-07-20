import { Dispatch } from 'redux';
import { listTalkRoom } from 'service/talkRoom';
import { addUserListSuccess } from 'src/actions/userList';
import { ITalkRoom, ITalkRoomServer } from 'src/interface/talkRoom.interface';
import { IState } from 'src/reducer';
import { failure } from './module';
import { IUser } from 'src/interface/user.interface';

export const TALKROOM_LIST_DATA = 'TALKROOM/LIST';
export const TALKROOM_ADD_DATA = 'TALKROOM/ADD';
export const TALKROOM_REMOVE_DATA = 'TALKROOM/REMOVE';

export interface ITalkRoomAddData {
  talkRoom: ITalkRoom;
  type: typeof TALKROOM_ADD_DATA;
}

export interface ITalkRoomRemoveData {
  talkRoom: ITalkRoom;
  type: typeof TALKROOM_REMOVE_DATA;
}

export interface ITalkRoomListData {
  talkRoomList: ITalkRoom[];
  type: typeof TALKROOM_LIST_DATA;
}

export const listTalkroomSuccess = (
  talkRoomList: ITalkRoom[],
): ITalkRoomListData => ({
  talkRoomList,
  type: TALKROOM_LIST_DATA,
});

export const addTalkRoom = (talkRoom: ITalkRoom): ITalkRoomAddData => ({
  talkRoom,
  type: TALKROOM_ADD_DATA,
});

export const removeTalkRoom = (talkRoom: ITalkRoom): ITalkRoomRemoveData => ({
  talkRoom,
  type: TALKROOM_REMOVE_DATA,
});

export const listTalkroom = () => async (
  dispatch: Dispatch,
  getState: () => IState,
) => {
  const { profile, token } = getState();
  try {
    if (!profile.data) throw Error('로그인이 이루어지지 않았습니다');

    const talkRoomList = await listTalkRoom(token.data);
    const filterTalkRoom = await talkRoomList.map(
      (talkRoom: ITalkRoomServer) => {
        const userList = new Map(talkRoom.userList.map(val => [val.id, val]));
        userList.delete((profile.data as IUser).id);
        dispatch(addUserListSuccess([...userList.values()]));
        return { ...talkRoom, userList: [...userList.keys()] };
      },
    );
    dispatch(listTalkroomSuccess(filterTalkRoom));
  } catch (error) {
    dispatch(failure(error));
  }
};
