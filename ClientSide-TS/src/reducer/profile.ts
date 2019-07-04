import { PROFILE_DATA } from 'actions/profile';
import { ERROR_MESSAGE, IErrorMessage } from 'src/actions/module';
import { IState } from 'src/interface/redux.interface';
import { IUser } from 'src/interface/user.interface';
import { IProfileData } from './../actions/profile';

export interface IProfileState extends IState<IUser | undefined> {}

type Action = IErrorMessage | IProfileData;

const initState: IProfileState = {
  error: undefined,
  status: false,
  data: undefined,
};

export default (state = initState, action: Action): IProfileState => {
  switch (action.type) {
    case PROFILE_DATA:
      return { ...state, error: undefined, data: action.profile, status: true };
    case ERROR_MESSAGE:
      return { ...state, error: action.error, status: false };
    default:
      return state;
  }
};
