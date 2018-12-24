export const CHANGE_NICKNAME = "CHANGE_NICKNAME";
export const LOGIN = "LOGIN";

export const login = profile => ({ type: LOGIN, profile });
export const changeNickname = nickname => {
    return {
        type: CHANGE_NICKNAME,
        nickname
    };
};
