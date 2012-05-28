var express = require("express");
var jade = require("jade");
var mongoose = require("mongoose");
var Vocabulary = require("./modules/vocabulary.js")

var mongo_uri = process.env.MONGOLAB_URI || "mongodb://localhost:27017/test"
var port = process.env.PORT || 3000;

var app = express.createServer(express.logger());
app.use(express.static(__dirname + "/assets"));

app.listen(port, function() {
	console.log("Listening on ..." + port);
	
	mongoose.connect(mongo_uri, function(err) {
		if (err) throw err;
	}); 

	mongoose.connection.on("open", function(err){
		console.log("Mongoose is connected!")
		if (err) throw err;
	});
	
});

app.get('/', function(request, response) {	
	var vocabulary = Vocabulary(mongoose);
	vocabulary.get_random(function(result) {
		response.render("index.jade", {german: result.german, english: result.english});
	});
});
