
module.exports={
    Member:require('../domain/member'),
    save:function(members){
        var member=new this.Member();
        
        member.platforName=members.platforName;
        member.socialId=members.socialId;
        member.nickName=members.nickName;
        member.photos=members.photos;
        member.save(function(err){
            console.log(err);
        });
    }
}