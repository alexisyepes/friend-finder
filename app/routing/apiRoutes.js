var path = require('path');

// Importing the list of friends
var friends = require('../data/friends');

// Exporting API routes
module.exports = function(app) {

	// Total list of friends
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Adding new friend entry
	app.post('/api/friends', function(req, res) {

		var userInput = req.body;

		var userResponses = userInput.scores;

		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000;

		for (var i = 0; i < friends.length; i++) {
		
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}

			if (diff < totalDifference) {
				
				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Adding new user 

		friends.push(userInput);

		res.json({status: 'OK', matchName, matchImage: matchImage});
	});
};