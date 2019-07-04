import { Dispatch } from 'redux';
import { profileServiceInstance } from 'service/profile';
import { IUser } from 'src/interface/user.interface';
import { IState } from 'src/reducer';
import { failure } from './module';

export const PROFILE_DATA = 'PROFILE/PROFILE-DATA';

export interface IProfileData {
  profile: IUser;
  type: typeof PROFILE_DATA;
}

export const getProfileSuccess = (profile: IUser): IProfileData => {
  return {
    profile,
    type: PROFILE_DATA,
  };
};

export const getProfile = () => async (
  dispatch: Dispatch,
  getState: () => IState,
) => {
  const { token } = getState();
  try {
    const res = await profileServiceInstance.getUser(token.data);
    dispatch(getProfileSuccess(res));
  } catch (e) {
    dispatch(failure(e));
  }
};
