import config from '../../.config/google-api-key.json';
import google from 'passport-google-oauth20'

export default (onloginSuccess,passport)=>{
    var GoogleStrategy=google.Strategy;

    passport.use(new GoogleStrategy({
            clientID:config.web.client_id,
            clientSecret:config.web.client_secret,
            callbackURL:'http://localhost:3000/auth/login/callback',
            scope: ['https://www.googleapis.com/auth/plus.me']
        },(accessToken,refreshToken,profile,done)=>{
            process.nextTick(() =>{
                onloginSuccess('google',profile.id,profile.displayName,profile.photos[0].value);
                return done(null,profile);
            });
        }
    ));
};