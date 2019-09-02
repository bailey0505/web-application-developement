var http = require('http');
var fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode) {
 if(!responseCode) responseCode = 200;
       fs.readFile(__dirname + path, function(err,data) {
 if(err) {
       res.writeHead(500, { 'Content-Type': 'text/plain' });
 res.end('500 - Internal Error');
 } else {
         res.writeHead(responseCode,
 { 'Content-Type': contentType });
      res.end(data);
      }
   });
};

http.createServer(function(req,res){
 // normalize url by removing querystring, optional
 // trailing slash, and making lowercase
 var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

swith(path){ 

	case '' :
                        serveStaticFile(res, '/assignment-1/home.html', 'text/html');
                         break;
	case '/blue' :
	                serveStaticFile(res, '/assignment-1/blue.html', 'text/html');
	                break;
	case '/green' :  
	                serveStaticFile(res, '/assignment-1/green.html', 'text/html');
			break; 
	default '/home':
			serveStaticFile(res, '/assignment-1/home.html', 'text/html');
			break;
}

}).listen(3001);

console.log('Server started on localhost:3000; MoneyBag MoneyBag');
