const passport  =require('passport');
const session   =require('express-session');
var Member=require('../domain/member');
module.exports=(app)=>{
//초기 설정
    app.use(session({
        secret: 'Kakao Cat',
        resave: false,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    
    //구글 로그인 설정
    var google=require('./google-OAuth');
    google(onLoginSuccess,passport);
    
    //구글 로그인 경로 설정및 CallBack설정
    var googleOAuthRoute=require('../router/login');
    googleOAuthRoute(app);

    //로그인 성공시 동작
    function onLoginSuccess(platforName, socialId, nickName, photos){
        var member=new Member();
        member.platforName=platforName;
        member.socialId=socialId;
        member.nickName=nickName;
        member.photos=photos;
        
        console.log(member);
        require('../service/memberService').save(member);
        
    }
}


