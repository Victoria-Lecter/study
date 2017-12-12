var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var logger = require('morgan')

var config = require('./config');

var User = require('./models/user');

require('babel-register');

var swig = require('swig');
var React = require('react');
var {renderToString} = require('react-dom/server');
var {match, RouterContext} = require('react-router');
var routes = require('./app/routes');

var app = express();

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
	console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/singup', function(req, res) {

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

app.post('/login', (req, res) => {

})


app.use(function(req, res) {
	match({routes: routes.default, location: req.url}, function(err, redirectLocation, renderProps) {
		if(err) {
			res.status(500).send(err.message)
		}else if(redirectLocation) {
			res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
		}else if(renderProps) {
			var html = renderToString(React.createElement(RouterContext, renderProps));
			var page = swig.renderFile('views/index.html', {html: html});
			res.status(200).send(page);
		}else{
			res.status(404).send('Page Not Found')
		}
	});
});

var server = require('http').createServer(app);

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});