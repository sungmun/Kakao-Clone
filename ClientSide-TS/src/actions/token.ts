import { Dispatch } from 'redux';
import { profileServiceInstance } from 'service/profile';
import { IUnLoadUser } from 'src/interface/user.interface';
import { failure } from './module';

export const TOKEN_DATA = 'TOKEN/TOKEN-DATA';

export interface ITokenData {
  token: string;
  type: typeof TOKEN_DATA;
}

export const setTokenSuccess = (token: string): ITokenData => ({
  token,
  type: TOKEN_DATA,
});

export const setToken = (user: IUnLoadUser) => async (dispatch: Dispatch) => {
  try {
    const token = await profileServiceInstance.login(user);
    dispatch(setTokenSuccess(token));
  } catch (error) {
    dispatch(failure(error));
  }
};
