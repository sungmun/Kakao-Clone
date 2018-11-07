import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './router/main';
import OAuth from './auth/oauth';

const app = express();

app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router);

var oauth=new OAuth(app);
app.use('/auth',oauth.googleOAuth())

const db=mongoose.connection;
db.on('error',console.error);
db.once('open',()=>console.log('Connected to Mongodb Server'));

mongoose.connect('mongodb://localhost/kakao_talk',{useNewUrlParser:true});

const server=app.listen(3000,()=>console.log('Express Start'));

//supervisor server.js