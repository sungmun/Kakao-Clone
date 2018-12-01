const ADD = "ADD";
const REMOVE = "REMOVE";
const CHANGE_NICKNAME = "CHANGE_NICKNAME";

const add = friend => ({ type: ADD, friend });
const remove = friend => ({ type: REMOVE, friend });

const changeNickname = (nickName, friend) => ({
    type: CHANGE_NICKNAME,
    nickName,
    friend
});

export default {
    ADD,
    REMOVE,
    CHANGE_NICKNAME,
    add,
    remove,
    changeNickname
};
