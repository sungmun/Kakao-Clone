/*
 * socket.io를 적용해보고 차후에 추가
 * export const ADD_FRIEND = "ADD_FRIEND";
 * export const LISTEN = "LISTEN";
 * export const SPEAK = "SPEAK";
 *
 * export const addFriend = friend => ({ type: ADD_FRIEND, friend });
 * export const listen = () => ({ type: LISTEN });
 * export const speak = talk => ({ type: SPEAK, talk });
 */
import action from "../actions";
const { CREATE, LEAVE, CHANGE_NAME } = action.talkRoom;

export default (state = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...state, action.talkRoom];
        case LEAVE:
            return state.filter(
                talkRoom => talkRoom.objectId !== action.talkRoom.objectId
            );
        case CHANGE_NAME:
            return state.map(talkRoom =>
                talkRoom.objectId === action.talkRoom.objectId
                    ? (talkRoom.name = action.nickname)
                    : talkRoom
            );
        default:
            return state;
    }
};
