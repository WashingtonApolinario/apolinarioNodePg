var express = require('express');
//var path = require('path');
var exphbs = require('express-handlebars');
const knex = require('./db/knex');
var app = express();

//app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')

app.set('port',(process.env.PORT || 5000));

app.get('/',function(req,res){
    res.render('home');
})

app.get('/about',function(req,res){
    res.render('about',{title:'About'})
})

app.get('/user',function(req,res){
knex('usuarios').select().then( usuarios => {
    res.render('usuarios',{objusers:usuarios});
});

});


 app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'),function(){
    console.log('servidor iniciado en puerto' + app.get('port'))
})