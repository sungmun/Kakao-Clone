const CREATE = "CREATE";
const CHANGE_NAME = "CHANGE_NAME";
const LEAVE = "LEAVE";

const create = talkRoom => ({ type: CREATE, talkRoom });
const leave = userId => ({ type: LEAVE, userId });
const changeName = (talkRoom, roomName) => ({
    type: CHANGE_NAME,
    talkRoom,
    roomName
});

const ADD_FRIEND = "ADD_FRIEND";
const LISTEN = "LISTEN";
const SPEAK = "SPEAK";

const addFriend = friend => ({ type: ADD_FRIEND, friend });
const listen = () => ({ type: LISTEN });
const speak = talk => ({ type: SPEAK, talk });

export default {
    CREATE,
    create,
    CHANGE_NAME,
    changeName,
    LEAVE,
    leave,

    ADD_FRIEND,
    addFriend,
    LISTEN,
    listen,
    SPEAK,
    speak
};
