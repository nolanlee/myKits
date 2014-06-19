var http = require('http')
  , fs = require('fs')
  , path = require('path');

http.createServer(function (req, res) {
  var filePath;

  if(req.url.length === 1) {
    filePath = path.join(path.dirname(), 'index.html');
  } else {
    filePath = path.join(path.dirname(), req.url);
  }

  fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
      if (!err){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      }else{
          console.log(err);
      }

  });
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
