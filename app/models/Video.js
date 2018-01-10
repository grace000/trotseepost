var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VideoSchema = new Schema ({
	title: {
		type: String
	},
	author : {
		type: String
	},
	categories: {
    	gayborhood: String,
    	restaurants: String,
    	sightseeing: String,
    	events: String,
    	nightlife: String
    }, 
	location: {
		type: String
	},
	url: {
		type: String
	},
  	meta: {
    	votes: Number,
    	favs:  Number
  	},
  	date : Date
});

var Video = mongoose.model("Video", VideoSchema);
module.exports = Video;