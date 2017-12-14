var router = require('express').Router();
var User = require('../models/user');

router.post('/', (req, res, next) => {
	console.log(req.body.data.id)
	User.findOne({ id: req.body.data.id }, function(err, user) {
		if (err) return console.error('DataBase not response');
		if(user && user.password === req.body.data.password) {
			res.send(user)
		}else{
			res.send(false);
		} 
	})
})

module.exports = router;