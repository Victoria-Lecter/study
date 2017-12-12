var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	id: { type: String, unique: true, index: true },
	name: String,
	surname: String,
	day: String,
	month: String,
	year: String,
	sex: String,
	country: String,
	city: String,
	email: String,
	phone: String
});

module.exports = mongoose.model('User', userSchema);