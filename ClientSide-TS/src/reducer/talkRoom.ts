import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from 'immer-reducer';
import { listTalkRoom } from 'service/talkRoom';
import { IAsyncThunk, IBaseState } from 'src/interface/redux.interface';
import { ITalkRoom } from 'src/interface/talkRoom.interface';
import { SocketClient } from 'src/service/soket-io';

export const asyncTalkRoomList = (): IAsyncThunk => async (
  dispatch,
  getState,
) => {
  const { profile, token } = getState();
  try {
    if (!profile.data) throw Error('로그인이 이루어지지 않았습니다');

    const talkRoomList = await listTalkRoom(token.data);

    const filterTalkRoom = await talkRoomList.map((talkRoom: ITalkRoom) => ({
      ...talkRoom,
      userList: talkRoom.userList.filter(({ id }) => id !== profile.data.id),
    }));

    SocketClient.instanse.loginTalkRoom(talkRoomList);

    dispatch(talkRoomActions.setListData(filterTalkRoom));
  } catch (error) {
    dispatch(talkRoomActions.setError(error));
  }
};

const initTalkRoomState: IBaseState<ITalkRoom[]> = {
  status: false,
  data: [],
  error: Error(''),
};

export type TalkRoomState = typeof initTalkRoomState;
class TalkRoomReducer extends ImmerReducer<TalkRoomState> {
  public setListData(list: ITalkRoom[]) {
    this.draftState.data = list;
    this.draftState.status = true;
  }

  public setAddData(talkRoom: ITalkRoom) {
    this.draftState.data.push(talkRoom);
  }

  public removeData(talkRoom: ITalkRoom) {
    this.draftState.data.filter(val => val.id !== talkRoom.id);
  }

  public setError(error: Error) {
    this.draftState.error = error;
    this.draftState.status = false;
  }
}

export const talkRoomActions = createActionCreators(TalkRoomReducer);

export default createReducerFunction(TalkRoomReducer, initTalkRoomState);
