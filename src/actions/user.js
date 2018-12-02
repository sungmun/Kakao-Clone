const CHANGE_NICKNAME = "CHANGE_NICKNAME";
const LOGIN = "LOGIN";

const login = (token, profile) => ({ type: LOGIN, token, profile });
const changeNickname = nickname => {
    return {
        type: CHANGE_NICKNAME,
        nickname
    };
};

export default {
    CHANGE_NICKNAME,
    changeNickname,
    LOGIN,
    login
};
