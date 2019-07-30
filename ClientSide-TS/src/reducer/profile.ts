import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from 'immer-reducer';
import { profileServiceInstance } from 'service/profile';
import { IAsyncThunk, IBaseState } from 'src/interface/redux.interface';
import { IUser } from 'src/interface/user.interface';
import { SocketClient } from 'src/service/soket-io';

export const asyncProfile = (): IAsyncThunk => async (dispatch, getState) => {
  const { token } = getState();
  try {
    const res = await profileServiceInstance.getUser(token.data);
    SocketClient.instanse.login(token.data, res);
    dispatch(profileActions.setData(res));
  } catch (e) {
    dispatch(profileActions.setError(e));
  }
};

const initProfileState: IBaseState<IUser> = {
  status: false,
  data: {} as IUser,
  error: Error(''),
};

export type ProfileState = typeof initProfileState;

class ProfileReducer extends ImmerReducer<ProfileState> {
  public setData(data: IUser) {
    this.draftState.data = data;
    this.draftState.status = true;
  }
  public setError(error: Error) {
    this.draftState.error = error;
    this.draftState.status = false;
  }
}

export const profileActions = createActionCreators(ProfileReducer);
export default createReducerFunction(ProfileReducer, initProfileState);
