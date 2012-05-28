var should = require('should');
var Vocabulary = require('../modules/vocabulary');

describe("Vocabulary", function() {
	var mongoose;
	before(function(done){
		var mongo_uri = process.env.MONGOLAB_URI || "mongodb://localhost:27017/test"
		mongoose = require("mongoose");
		mongoose.connect(mongo_uri, function(err) {
			if (err) throw err;
		}); 
		
		mongoose.connection.on("open", function(err){
			if (err) throw err;
			done();
		});
	});
	
	it("should get a translation of Ich", function(done) {
		var vocabulary = Vocabulary(mongoose);
		vocabulary.get("Ich", function(result) {
			result.should.equal("I");
			done();
		});
	});
	
	it("should get the collection size", function(done) {
		var vocabulary = Vocabulary(mongoose);
		vocabulary.get_count(function(result) {
			result.should.equal(3);
			done();
		});
	});
});