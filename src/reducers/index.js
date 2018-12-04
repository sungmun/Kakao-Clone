import { combineReducers } from "redux";
import friend from "./friend";
import user from "./user";
import talkRoom from "./talkRoom";

export default combineReducers({
    friend,
    user,
    talkRoom
});
