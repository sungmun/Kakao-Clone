const express         =require('express');
const bodyParser      =require('body-parser');

const app         =express();

require('./router/main')(app);

app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const server=app.listen(3000,function(){
    console.log('Express Start');
});
