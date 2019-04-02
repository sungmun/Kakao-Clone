import { SET_PROFILE } from 'actions/profile';
const initstate = {
    platformName: '',
    socialId: '',
    nickName: '',
    photos: ''
};

export default (state = initstate, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return Object.assign({}, state, action.profile);
        default:
            return state;
    }
};
