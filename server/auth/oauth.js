import passport from 'passport';
import session from 'express-session';
import Member from '../domain/member';
import memberService from '../service/memberService'
import google from './google-OAuth';
import googleOAuthRoute from '../router/login';

export default class OAuth{
    constructor(app){
        this.app=app;
        this.init();
    }

    init(){
        this.app.use(session({
            secret: 'Kakao Cat',
            resave: false,
            saveUninitialized: true
        }));
    
        this.app.use(passport.initialize());
        this.app.use(passport.session());

        passport.serializeUser((user,done)=>done(null,user));
        passport.deserializeUser((user,done)=>done(null,user));
    }

    googleOAuth() {
        
        google(this.onLoginSuccess,passport);
    
        //구글 로그인 경로 설정및 CallBack설정
        return googleOAuthRoute;
        // app.use('/oauth',googleOAuthRoute());
    }

    onLoginSuccess(platforName, socialId, nickName, photos){
        Member.findOne({
            platforName:platforName,
            socialId:socialId
        },(err,member)=>{
            if(err) return done(err);

            if(member) return done(err,member);
            
            const service=new memberService();
            service.save(new Member({
                platforName:platforName,
                socialId:socialId,
                nickName:nickName,
                photos:photos
            }));
            
        });
    }
}

