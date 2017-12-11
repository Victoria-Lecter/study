var path = require('path');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var async = require('async');
var request = require('request');
var xml2js = require('xml2js');
var Character = require('./models/character');
var config = require('./config');
var _ = require('underscore');

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

app.post('/test', function(req, res) {
	console.log(req.body)
	res.send(req.body)
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