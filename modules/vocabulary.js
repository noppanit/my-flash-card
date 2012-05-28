var Vocabulary = function() {
	
	function get(german_vocab, callback) {
		var mongoose = require("mongoose");
		mongoose.connect('mongodb://localhost:27017/test', function(err) {
			if (err) throw err;
		});
		
		mongoose.connection.on("open", function(){
			mongoose.connection.db.collection("test", function (err, collection) {
		    	collection.findOne({ "german" : german_vocab }, function(err, result) {
					callback(result.english)
				});
			});
		});
		
	}
	
	return {
		get : get
	};
}

module.exports = Vocabulary;