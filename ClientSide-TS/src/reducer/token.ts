import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from 'immer-reducer';
import { profileServiceInstance } from 'service/profile';
import { IAsyncThunk, IBaseState } from 'src/interface/redux.interface';
import { IUnLoadUser } from 'src/interface/user.interface';

export const asyncToken = (
  user: IUnLoadUser,
): IAsyncThunk => async dispatch => {
  try {
    const token = await profileServiceInstance.login(user);
    dispatch(tokenActions.setToken(token));
  } catch (error) {
    dispatch(tokenActions.setError(error));
  }
};

const getLocalStorageToken = (): string => {
  const token = window.localStorage.getItem('token');
  if (token === null) return '';
  return token;
};

const initTokenState: IBaseState<string> = {
  status: false,
  data: getLocalStorageToken(),
  error: Error(''),
};

export type TokenState = typeof initTokenState;
class TokenReducer extends ImmerReducer<TokenState> {
  public setToken(token: string) {
    this.draftState.data = token;
    this.draftState.status = true;
  }
  public setError(error: Error) {
    this.draftState.error = error;
    this.draftState.status = false;
  }
}

export const tokenActions = createActionCreators(TokenReducer);
export default createReducerFunction(TokenReducer, initTokenState);
