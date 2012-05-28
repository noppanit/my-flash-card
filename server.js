var express = require("express");
var jade = require("jade");

var database = { "vocab" : [
		{
			"id" : "0",
			"german" : "Ich",
			"english" : "I",
		}, 
		{
			"id" : "1",
			"german" : "Wurst",
			"english" : "Sausage"
		}
	]
};

var port = process.env.PORT || 3000;

var app = express.createServer(express.logger());
app.use(express.static(__dirname + "/assets"));

app.listen(port, function() {
	console.log("Listening on ..." + port);
});

app.get('/', function(request, response) {
	var randomNum = Math.floor(Math.random()*database.vocab.length);
	var vocabulary = database.vocab[randomNum];
	response.render("index.jade", {german: vocabulary.german, english: vocabulary.english});
});

app.get('/add', function(request, response) {
	response.render("add.jade");
});
