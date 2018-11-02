var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var memberSchema=new Schema({
    platforName:String,
    socialId:String,
    nickName:String,
    photos:String
});

module.exports=mongoose.model('Member',memberSchema);