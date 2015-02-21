var port = 8000;
var connect = require ('connect');
var app = connect();
var logger = function(req,res,next){
    console.log(req.method, req.url);
    next();
};
var howdyWorld = function (req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    next();
};

var printline = function (req, res, next){
    res.end('Yello World');
    console.log('printed');
};

app.use('/howdy', howdyWorld);
app.use(logger);
app.use(printline);
app.listen(port);
console.log('localhost:' + port);
