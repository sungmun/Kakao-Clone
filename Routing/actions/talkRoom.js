export const CREATE = "CREATE";
export const CHANGE_NAME = "CHANGE_NAME";
export const LEAVE = "LEAVE";

export const create = talkRoom => ({ type: CREATE, talkRoom });
export const leave = userId => ({ type: LEAVE, userId });
export const changeName = (talkRoom, roomName) => ({
    type: CHANGE_NAME,
    talkRoom,
    roomName
});

export const ADD_FRIEND = "ADD_FRIEND";
export const LISTEN = "LISTEN";
export const SPEAK = "SPEAK";

export const addFriend = friend => ({ type: ADD_FRIEND, friend });
export const listen = () => ({ type: LISTEN });
export const speak = talk => ({ type: SPEAK, talk });
