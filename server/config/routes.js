var friends = require('./../controllers/friends.js');

module.exports = function(app) {
	
	app.get('/friends', function(req, res) {
		friends.index(req, res);
	})

	app.post('/friends', function(req, res) {
		friends.create(req, res);	
	})

	app.delete('/friends/:friend_id', function(req, res) {
		console.log(req.params.friend_id);
		friends.delete(req, res);
	})
};

