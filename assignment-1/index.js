//These are constants that never change
const http = require('http');
const fs = require('fs');
const path = require("path");

//If url is not found, It ewill automatically spit out 404 error
function send404(response){
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write('Error 404: Resource not found.');
  response.end();
}


//Configuring javascript and html files to be served
const filelookup  = {
	'.js': 'application/javascript',
 	 '.html': 'text/html'
}

//Main Function That will serve our Files and Create Server
const server = http.createServer((req, res) => {
  if(req.method == 'GET'){

    let fileurl;
    fileurl = req.url;
//Using Math Random Javascript function to change homepage url to display green button link or blue button link 50/50	 
    if(req.url == '/' && Math.random() > .5 ){
      fileurl = 'homeb';
  	
   
    }else if(req.url == '/'){
	fileurl='homeg';

    }

    let filepath = path.resolve('./' + fileurl + '.html');

    let fileExt = path.extname(filepath);
    let filetype = filelookup[fileExt];

    if(!filetype) {
      send404(res);
      return;
    }

    fs.exists(filepath, (exists) => {
      if(!exists){
        send404(res);
        return;
      }

      res.writeHead(200, {'Content-Type': filetype});
      fs.createReadStream(filepath).pipe(res);

    });

  }
}).listen(3000);
console.log("Server running at port 3000");
