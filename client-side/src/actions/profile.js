import { getUser } from 'service/profile';

export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';

export const getProfileFailure = e => {
  return {
    type: GET_PROFILE_FAILURE,
    message: e,
  };
};

export const getProfileSuccess = profile => {
  return {
    type: GET_PROFILE_SUCCESS,
    profile,
  };
};

export const getProfile = () => async (dispatch, getState) => {
  const { token } = getState();
  try {
    const res = await getUser(token.data);
    dispatch(getProfileSuccess(res));
  } catch (e) {
    dispatch(getProfileFailure(e));
  }
};
