import { Schema } from "mongoose";

const memberSchema = new Schema({
    platforName: String,
    socialId: String,
    nickName: String,
    photos: String
});

export default mongoose.model("Member", memberSchema);
