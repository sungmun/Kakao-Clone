import mongoose from 'mongoose';

var Schema=mongoose.Schema;

var memberSchema=new Schema({
    platforName:String,
    socialId:String,
    nickName:String,
    photos:String
});

export default mongoose.model('Member',memberSchema);