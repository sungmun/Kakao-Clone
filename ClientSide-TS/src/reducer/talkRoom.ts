import { ERROR_MESSAGE, IErrorMessage } from 'src/actions/module';
import {
  ITalkRoomAddData,
  ITalkRoomListData,
  ITalkRoomRemoveData,
  TALKROOM_ADD_DATA,
  TALKROOM_LIST_DATA,
  TALKROOM_REMOVE_DATA,
} from 'src/actions/talkRoom';
import { IState } from 'src/interface/redux.interface';
import { ITalkRoom } from 'src/interface/talkRoom.interface';

export interface ITalkroomState extends IState<ITalkRoom[]> {}

type Action =
  | IErrorMessage
  | ITalkRoomAddData
  | ITalkRoomListData
  | ITalkRoomRemoveData;

const initState: ITalkroomState = {
  status: false,
  data: [],
  error: undefined,
};

export default (state = initState, action: Action): ITalkroomState => {
  switch (action.type) {
    case TALKROOM_ADD_DATA: {
      if (!action.talkRoom) return state;
      state.data.push(action.talkRoom);
      return state;
    }
    case TALKROOM_REMOVE_DATA:
      return {
        ...state,
      };
    case TALKROOM_LIST_DATA:
      return {
        ...state,
        data: action.talkRoomList,
        error: undefined,
        status: true,
      };
    case ERROR_MESSAGE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
