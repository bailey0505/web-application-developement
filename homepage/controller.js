var express = require('express');
var exphbs  = require('express-handlebars');
const fs = require('fs');

var modules = require('./lib/modules.js');

var app = express();

app.use(express.static(__dirname + "/style"));
app.use(express.static(__dirname + "/images"));
app.use(express.static(__dirname + '/public')); 



app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3001);

app.use(function(req, res, next){
    res.locals.showTests = app.get("env") !== 'production' &&
        req.query.test === "1";
    next();
    
});


app.get('/', function(req, res) {
	res.render('home', {
	 classes: modules.getclasses()
	 
	});

});
    
app.get('/about', function(req, res) {
 res.render('about',  {
     skills: modules.getskills(),
     aboutme: modules.getabout(), 
     PageTestScript: '/qa/tests-about.js'
    });
});
app.get('/contact', function(req, res) {
 res.render('contact')
});
app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});
app.use(function(err, req, res, next){
   console.log(err.stack);
    res.status(500);
    res.render('500');
});

app.post('/submit', function(req, res){
	if(req.xhr || req.accepts('json,html')==='json'){
 // if there were an error, we would send { error: 'error description' }
 res.send({ success: true });
 } else {
 // if there were an error, we would redirect to an error page
 res.redirect(303, '/thank-you');
 }
	
});

app.listen(app.get('port'), function(){
 console.log( 'Express started on http://localhost:' +
 app.get('port') + '; press Ctrl-C to terminate.' );
    
});