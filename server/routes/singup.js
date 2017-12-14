var User = require('../models/user');
var router = require('express').Router();
var nodemailer = require('nodemailer');

router.post('/', function(req, res) {

	var state = req.body.state;
	var id = req.body.id;

	var user = new User({
		id: id,
		name: state.name,
		surname: state.surname,
		day: state.day,
		month: state.month,
		year: state.year,
		sex: state.sex,
		country: state.country,
		city: state.city,
		email: state.email,
		phone: state.phone
	});

	// create reusable transport method (opens pool of SMTP connections)
	var smtpTransport = nodemailer.createTransport({
	    service: "Gmail",
	    auth: {
	        user: "pechunka04@gmail.com",
	        pass: "d04101996d"
	    }
	});

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: 'Study in the czech', // sender address
	    to: state.email, // list of receivers
	    subject: "Hello", // Subject line
	    text: "Hello world ✔ Text", // plaintext body
	    html: "<b>Hello world Html</b>" // html body
	}

	// send mail with defined transport object
	smtpTransport.sendMail(mailOptions, function(error, response){
	    if(error){
	        console.log('This error:     ' + error);
	    }else{
	        console.log("Message sent: " + response.message);
	    }

	    // if you don't want to use this transport object anymore, uncomment following line
	    //smtpTransport.close(); // shut down the connection pool, no more messages
	});


	user.save(function(err) {
		if (err) return next(err);
		res.send({ message: state.name + ' has been added successfully!' });
	});

})

module.exports = router;