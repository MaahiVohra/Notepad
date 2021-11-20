var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var document = require('./models/document');

// Connecting to database
var query = 'mongodb+srv://Maahi:ArhovihaaM19$@letsc0de.yirct.mongodb.net/letsc0de?retryWrites=true&w=majority'

const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db, { useNewUrlParser : true,
useUnifiedTopology: true }, function(error) {
	if (error) {
		console.log("Error!" + error);
	}
});

module.exports = router;
