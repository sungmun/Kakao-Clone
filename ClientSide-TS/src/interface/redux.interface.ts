import { ThunkAction } from 'redux-thunk';
import { IState } from 'src/reducer/index';
export interface IBaseState<T> extends IBase {
  data: T;
}

export interface IBase {
  error: Error;
  status: boolean;
}
export interface IAsyncThunk
  extends ThunkAction<Promise<void>, IState, {}, any> {}
