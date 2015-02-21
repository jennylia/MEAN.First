var http = require('http');
var port = 1337;

http.createServer(function(req,res){
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end("Hello Mitnick, you've just stumbled on the simplest thing")
        }).listen(port);

console.log('Running on localhost');
