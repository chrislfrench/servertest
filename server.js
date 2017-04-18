var http = require("http");

var PORT1 = 7000;

var PORT2 = 7500;

var goodPhrases = ["Good job", "Nice going!", "Good on you!"];

var badPhrases = ["Bad job!", "You are terrible!", "Just give up!"];

function handleRequest(request, response) {

	response.end(getRandomPhrase("good"));
}

function handleRequest2(request, response) {

	response.end(getRandomPhrase("bad"));
}

var server1 = http.createServer(handleRequest);

var server2 = http.createServer(handleRequest2);


server2.listen(PORT2, function() {
	console.log("You are on port " + PORT2);
})

server1.listen(PORT1, function() {
	console.log("You are on port " + PORT1);
})

function getRandomPhrase (type) {
	switch (type) {
		case "good":
		var index = Math.floor(Math.random()) * goodPhrases.length
		return goodPhrases[index];
		break;

		case "bad":
		var index = Math.floor(Math.random()) * badPhrases.length
		return badPhrases[index];
		break;
	}
}