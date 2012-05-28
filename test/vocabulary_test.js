var should = require('should');
var Vocabulary = require('../modules/vocabulary');

describe("Vocabulary", function() {
	it("should get a translation of Ich", function(done) {
		var vocabulary = Vocabulary();
		vocabulary.get("Ich", function(result) {
			result.should.equal("I");
			done();
		});
	});
});