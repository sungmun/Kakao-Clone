import action from "../actions";
const { ADD, CHANGE_NICKNAME, REMOVE } = action.friend;

// var member = {
//     objectId: "",
//     platforName: "",
//     socialId: "",
//     nickName: "",
//     photos: ""
// };

export default (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.friend];
        case CHANGE_NICKNAME:
            state.map(friend =>
                friend.objectId === action.friend.objectId
                    ? (friend.nickName = action.nickName)
                    : friend
            );
        case REMOVE:
            return state.filter(
                friend => friend.objectId !== action.friend.objectId
            );
        default:
            return state;
    }
};
