const express         =require('express');
const bodyParser      =require('body-parser');

const mongoose        =require('mongoose');
const app         =express();

require('./router/main')(app);

app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const db=mongoose.connection;
db.on('error',console.error);
db.once('open',function(){
    console.log('Connected to Mongodb Server');
});
mongoose.connect('mongodb://localhost/kakao_talk',{useNewUrlParser:true});

const server=app.listen(3000,function(){
    console.log('Express Start');
});