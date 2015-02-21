var port= 1337;
var express =require('express');
var app = express();

app.use('/', function(req, res){
        res.send('Hey world');
    });

app.listen(port);

console.log('local host: ' + port);
