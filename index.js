var http = require('https');
console.log("Server to be started on https");
var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});
console.log("Server created to respond with Hello World!");
var port = 443;
server.listen(port);

console.log("Server running at https://localhost:%d", port);
