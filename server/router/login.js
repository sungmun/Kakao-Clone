import express from 'express';
import passport from 'passport';

var OAuth=express.Router();

OAuth.get('/google',passport.authenticate('google'));

OAuth.get('/login/callback',passport.authenticate('google',
    {failureRedirect:'/auth/goog`le'}),
    (err,req,res,next)=>res.redirect(((err.name==='TokenError')?'/auth/google':'/')),
    (req,res)=>res.redirect('/')
);

export default OAuth;