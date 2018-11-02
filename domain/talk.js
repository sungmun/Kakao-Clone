var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var talkSchema=new Schema({
    from:{type:mongoose.Schema.Types.ObjectId, ref:'member'},
    to:{type:mongoose.Schema.Types.ObjectId, ref:'member'},
    message:String,
    time:{type:Date,default:Date.now}
});

module.exports=mongoose.model('talk',talkSchema);