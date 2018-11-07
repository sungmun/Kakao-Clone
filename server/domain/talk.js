import mongoose from 'mongoose';

var Schema=mongoose.Schema;

var talkSchema=new Schema({
    from:{type:Schema.Types.ObjectId, ref:'member'},
    to:{type:Schema.Types.ObjectId, ref:'member'},
    message:String,
    time:{type:Date,default:Date.now}
});

export default mongoose.model('talk',talkSchema);