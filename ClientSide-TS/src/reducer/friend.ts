import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from 'immer-reducer';
import { profileServiceInstance } from 'service/profile';
import { IAsyncThunk, IBaseState } from 'src/interface/redux.interface';
import { IUser } from 'src/interface/user.interface';

export const asyncListRead = (): IAsyncThunk => async (dispatch, getState) => {
  try {
    const { token } = getState();
    const friend = await profileServiceInstance.getFriend(token.data);
    dispatch(friendActions.setListData(friend));
  } catch (error) {
    dispatch(friendActions.setError(error));
  }
};

export const asyncAdd = (user: IUser): IAsyncThunk => async (
  dispatch,
  getState,
) => {
  try {
    const { token } = getState();
    await profileServiceInstance.addFreind(token.data, user.id);
    dispatch(friendActions.setAddData(user));
  } catch (error) {
    dispatch(friendActions.setError(error));
  }
};

const initFriendState: IBaseState<IUser[]> = {
  status: false,
  data: [],
  error: Error(''),
};

export type FriendState = typeof initFriendState;

class FriendReducer extends ImmerReducer<FriendState> {
  public setListData(list: IUser[]) {
    this.draftState.data = list;
    this.draftState.status = true;
  }
  public setAddData(friend: IUser) {
    this.draftState.data.push(friend);
  }
  public setError(error: Error) {
    this.draftState.error = error;
    this.draftState.status = false;
  }
}

export const friendActions = createActionCreators(FriendReducer);
export default createReducerFunction(FriendReducer, initFriendState);
