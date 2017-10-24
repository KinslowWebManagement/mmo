var config = require('./config');

var express = require('express');
var http = require('http');
var app = express();
var dist;
dist = http.createServer(app);
dist.listen(process.env.PORT, function(){
    if (config.debug) console.log(process.env.PORT + ' is the magic port');
});