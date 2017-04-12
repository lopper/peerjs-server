var express = require('express');
var app = express();
var ExpressPeerServer = require('./lib').ExpressPeerServer;


var path = '/peerjs';
var port = 9000;

app.get('/', function(req, res, next) { res.send('Hello world!'); });

var options = {
    debug: false,
	allow_discovery: false
}

// OR

var server = require('http').createServer(app);


app.use(path, ExpressPeerServer(server, options));


server.listen(port);

console.log(`Started PeerServer on ::, port: ${port}, path: ${path}`)