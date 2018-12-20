import mongoose from "mongoose";

const friend = new mongoose.Schema({
    me: { type: Schema.Types.ObjectId, ref: "member" },
    friend: { type: Schema.Types.ObjectId, ref: "member" }
});

export default mongoose.model("talk", talkSchema);
