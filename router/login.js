var express=require('express');
var passport=require('passport');

module.exports=(app)=>{

    app.get('/auth/google',passport.authenticate('google'));

    app.get('/auth/login/callback',passport.authenticate('google',{failureRedirect:'/auth/google'}),
        (err,req,res,next)=>{
            if(err.name==='TokenError'){
                res.redirect('/auth/google');
            }else{
                console.log(err);
                res.redirect('/');
            }
        },
        (req,res)=>{
            var user=req.user;
            console.log(user);

            res.redirect('/')
        }
    
    );

};