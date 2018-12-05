import action from "../actions";
const { LOGIN, CHANGE_NICKNAME } = action.user;
const initalState = {
    token: "",
    profile: {
        platforName: "",
        socialId: "",
        nickName: "",
        photos: ""
    }
};
export default (state = initalState, action) => {
    switch (action.type) {
        case LOGIN:
            return { token: action.token, profile: action.profile };
        case CHANGE_NICKNAME:
            return Object.assign({}, state, {
                profile: Object.assign({}, action.profile, {
                    nickName: action.nickName
                })
            });
        default:
            return state;
    }
};
