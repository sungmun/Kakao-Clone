import { FRIEND_DATA, IFriendData } from 'src/actions/friend/add';
import { FRIEND_LIST_DATA, IFriendListData } from 'src/actions/friend/list';
import { ERROR_MESSAGE, IErrorMessage } from 'src/actions/module';
import { IState } from 'src/interface/redux.interface';
import { IUser } from 'src/interface/user.interface';

export interface IFriendState extends IState<IUser[]> {}

const initState: IFriendState = {
  error: undefined,
  status: false,
  data: [],
};

type Action = IFriendData | IErrorMessage | IFriendListData;

export default (state = initState, action: Action): IFriendState => {
  switch (action.type) {
    case FRIEND_LIST_DATA:
      return {
        ...state,
        error: undefined,
        status: true,
        data: action.friendList,
      };
    case FRIEND_DATA: {
      return {
        ...state,
        error: undefined,
        status: true,
        data: [...state.data, action.friend],
      };
    }
    case ERROR_MESSAGE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
