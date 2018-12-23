export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const CHANGE_NICKNAME = "CHANGE_NICKNAME";
export const add = friend => ({ type: ADD, friend });
export const remove = friend => ({ type: REMOVE, friend });
export const changeNickname = (nickName, friend) => ({
    type: CHANGE_NICKNAME,
    nickName,
    friend
});
