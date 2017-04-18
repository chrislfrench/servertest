var http = require("http");

var PORT1 = 7000;

var PORT2 = 7500;

function handleRequest(request, response) {

	response.end("it works!! Path hit: " + request.url + "You are a really cool guy");
}

function handleRequest2(request, response) {

	response.end("it works!! Path hit: " + request.url + "You aren't doing very well in life.");
}

var server1 = http.createServer(handleRequest);

var server2 = http.createServer(handleRequest2);


server2.listen(PORT2, function() {
	console.log("You are on port " + PORT2 + "and you are not doing very well in life.");
})

server1.listen(PORT1, function() {
	console.log("You are on port " + PORT1 + "and you are a really cool guy.");
})