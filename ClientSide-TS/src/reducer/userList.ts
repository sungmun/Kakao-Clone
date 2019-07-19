import { ERROR_MESSAGE, IErrorMessage } from 'src/actions/module';
import {
  IUserData,
  IUserListData,
  USER_DATA,
  USER_LIST_DATA,
} from 'src/actions/userList';
import { IState } from 'src/interface/redux.interface';
import { IUser } from 'src/interface/user.interface';

export interface IUserListState extends IState<Map<number, IUser>> {}

type Action = IErrorMessage | IUserData | IUserListData;

const initState: IUserListState = {
  status: false,
  data: new Map<number, IUser>(),
  error: undefined,
};

export default (state = initState, action: Action): IUserListState => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return { ...state, error: action.error };
    case USER_DATA: {
      state.data.set(action.user.id, action.user);
      return state;
    }
    case USER_LIST_DATA: {
      action.userList.forEach(val => state.data.set(val.id, val));
      return state;
    }
    default:
      return state;
  }
};
