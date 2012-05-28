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
	
	function get_random(callback) {
		var rand = Math.random();
		mongoose.connection.db.collection("test", function (err, collection) {
			collection.findOne( { "random" : { $gte : rand } }, function(err, result) {
				if(result == null) {
					collection.findOne( { "random" : { $lte : rand } }, function(err, result) {
						callback(result);				
					});		
				} else {
					callback(result);
				}
			});
		});
	}
	
	return {
		get : get,
		get_count : get_count,
		get_random : get_random
	};
}

module.exports = Vocabulary;