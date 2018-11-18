import express from 'express';
import bodyParser from'body-parser';
import mongoose from'mongoose';
import router from './router/main';
import OAuth from './auth/oauth';
import next from 'next';
import morgan from 'morgan';

const dev = process.env.NODE_ENV !== 'production'

const app = next({dev});

const handle=app.getRequestHandler();

const port =3001;

app.prepare()
    .then(()=>{
        const server=express();
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({extended:true}));
        
        server.use('/api',router);

        server.use(morgan('dev'));
         
        var oauth=new OAuth(server);
        server.use('/api/auth',oauth.googleOAuth())

        // server.get('*',Auth,(req,res)=>handle(req,res));
        server.get('*',(req,res,next)=>{
            if(req.isAuthenticated()) {
                return app.render(req, res);
            }
            return app.render(req, res, '/login');
        });
        const db=mongoose.connection;
        db.on('error',console.error);
        db.once('open',()=>console.log('Connected to Mongodb Server'));
        
        mongoose.connect('mongodb://localhost/kakao_talk',{useNewUrlParser:true});
        
        server.listen(port,(err)=>console.log('Express listening on port', port));
    });




//supervisor server.js