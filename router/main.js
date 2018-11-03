module.exports=function(app){
    app.get('/',function(req,res){
        res.render('index.html',{
            title:'My HomePage',
            length:5
        });
    });
    
    app.get('/about',function(req,res){
        res.render('about.html');
    });

}