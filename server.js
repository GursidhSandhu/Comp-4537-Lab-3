// use the predefined modules
const http = require('http');
const url = require('url');

// use our date and messages modules
const date = require('./modules/utils');
const messages = require('./modules/messages');

// define our port
const port = process.env.PORT || 8888;

// listen on the port
http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    let currentDate = date.date();
    let param = url.parse(req.url,true);
    res.end(messages.part1 + param.query["name"]  + messages.part2 + currentDate);
}).listen(port);

