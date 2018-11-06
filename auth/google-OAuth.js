const config=require('../.config/google-api-key.json');
module.exports=function(onloginSuccess,passport){
    const GoogleStrategy  =require('passport-google-oauth20').Strategy;

    passport.serializeUser((user,done)=>done(null,user));
    passport.deserializeUser((user,done)=>done(null,user));

    passport.use(new GoogleStrategy({
            clientID:config.web.client_id,
            clientSecret:config.web.client_secret,
            callbackURL:'http://localhost:3000/auth/login/callback',
            scope: ['https://www.googleapis.com/auth/plus.me']
        },function(accessToken,refreshToken,profile,done){
            process.nextTick(function() {
                console.log('===========start===========');
                onloginSuccess('google',profile.id,profile.displayName,profile.photos[0].value);
                console.log('===========end===========');
                return done(null,profile);
            });
        }
    ));
};