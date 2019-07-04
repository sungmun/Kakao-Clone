import { ERROR_MESSAGE } from 'src/actions/module';
import { TOKEN_DATA } from 'src/actions/token';
import { IState } from 'src/interface/redux.interface';
import { IErrorMessage } from './../actions/module';
import { ITokenData } from './../actions/token';

export interface ITokenState extends IState<string> {}

type Action = IErrorMessage | ITokenData;

const getLocalStorageToken = (): string => {
  const token = window.localStorage.getItem('token');
  if (token === null) return '';
  return token;
};

const initState: ITokenState = {
  error: undefined,
  status: false,
  data: getLocalStorageToken(),
};

export default (state = initState, action: Action): ITokenState => {
  switch (action.type) {
    case TOKEN_DATA: {
      if (!action.token) return state;
      window.localStorage.setItem('token', action.token);
      return { ...state, status: true, data: action.token, error: undefined };
    }
    case ERROR_MESSAGE: {
      window.localStorage.removeItem('token');
      return { ...state, status: false, error: action.error };
    }
    default:
      return state;
  }
};
