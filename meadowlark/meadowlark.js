var express = require('express');
var app = express();

var modules = require('./lib/modules.js');
var Handlebars     = require('handlebars');
var HandlebarsIntl = require('handlebars-intl');





var handlebars = require('express3-handlebars')
 .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
 res.render('home');
});
app.get('/about', function(req, res) {
 res.render('about');
});
app.get('/date', function(req, res) {
 res.render('date', { date: new Date().toString() });
});

app.get('/random', function(req, res) {
	var rc = Math.random
res.render()
});


// 404 catch-all handler (middleware)
app.use(function(req, res, next){
 res.status(404);
 res.render('404');
});
// 500 error handler (middleware)
app.use(function(err, req, res, next){
 console.error(err.stack);
 res.status(500);
 res.render('500');
});
app.listen(app.get('port'), function(){
 console.log( 'Express started on http://localhost:' +
 app.get('port') + '; press Ctrl-C to terminate.' );
});
