import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from 'immer-reducer';
import { IAsyncThunk, IBaseState } from 'src/interface/redux.interface';
import { ITalk } from 'src/interface/talk.interface';
import { SocketClient } from 'src/service/soket-io';
import { getTalkList } from 'src/service/talkRoom';

export const listAsync = (talkRoomId: number): IAsyncThunk => async (
  dispatch,
  getState,
) => {
  try {
    const { token } = getState();
    const talkList = (await getTalkList(token.data, talkRoomId)) as ITalk[];
    SocketClient.instanse.TalkRoomList.forEach(talkroom => {
      talkroom.Dispatch = dispatch;
    });
    dispatch(talkActions.setListData(talkList, talkRoomId));
  } catch (error) {
    dispatch(talkActions.setError(error));
  }
};

const initTalkState: IBaseState<Map<number, ITalk[]>> = {
  status: false,
  data: new Map<number, ITalk[]>(),
  error: Error(''),
};

export type TalkState = typeof initTalkState;

class TalkReducer extends ImmerReducer<TalkState> {
  public setAddData(talk: ITalk, talkRoomId: number) {
    if (this.draftState.data.has(talkRoomId)) {
      (this.draftState.data.get(talkRoomId) as ITalk[]).push(talk);
    } else {
      this.draftState.data.set(talkRoomId, [talk]);
    }
    this.draftState.data = new Map(Array.from(this.draftState.data.entries()));
  }

  public setListData(talkList: ITalk[], talkRoomId: number) {
    this.draftState.status = true;
    this.draftState.data.set(talkRoomId, talkList);
    this.draftState.data = new Map(Array.from(this.draftState.data.entries()));
  }

  public setError(error: Error) {
    this.draftState.error = error;
    this.draftState.status = false;
  }
}

export const talkActions = createActionCreators(TalkReducer);

export default createReducerFunction(TalkReducer, initTalkState);
