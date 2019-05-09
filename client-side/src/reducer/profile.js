import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from 'actions/profile';

const initstate = {
  error: null,
  status: false,
  data: {
    id: -1,
    platformName: '',
    socialId: '',
    nickName: '',
    photos: '',
  },
};

export default (state = initstate, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return { ...state, error: null, data: action.profile, status: true };
    case GET_PROFILE_FAILURE:
      return { ...state, error: action.message };
    default:
      return state;
  }
};
