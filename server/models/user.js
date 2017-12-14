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
	email: {type: String, unique: true},
	phone: String,
	admin: {type: Number, default: 0}
});

module.exports = mongoose.model('User', userSchema);