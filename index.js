var http = require('http');
console.log("Server to be started on http");
var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});
console.log("Server created to respond with Hello World!");
var port = 80;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
