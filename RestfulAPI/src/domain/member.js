import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    platforName: String,
    socialId: String,
    nickName: String,
    photos: String
});

export default mongoose.model("Member", memberSchema);
