/* server2.js */

const http = require('http');

const requestListener = function(req, res){
    res.writeHead(200);
    res.end('Hello world!');
}

const server = http.createServer();

server.listen();
server.on('request', requestListener);