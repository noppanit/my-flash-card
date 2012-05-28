var Vocabulary = function(mongoose) {
	
	function get(german_vocab, callback) {
		mongoose.connection.db.collection("test", function (err, collection) {
	    	collection.findOne({ "german" : german_vocab }, function(err, result) {
				callback(result.english)
			});
		});
	}
	
	function get_count(callback) {
		mongoose.connection.db.collection("test", function (err, collection) {
	    	collection.count(function(err, result) {
				callback(result);
			});
		});
	}
	
	return {
		get : get,
		get_count : get_count
	};
}

module.exports = Vocabulary;