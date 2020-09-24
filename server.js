var express = require('express');
var passport = require('passport');
var port = process.env.PORT || 1337;
var exphbs = require('express-handlebars');

var app = express();

require('./configuration/passport')(passport);
var config = require('./configuration/config')

// var path = require('path')
// var fs = require('fs')
// var https = require('https')

// var certOptions = {
//   key: fs.readFileSync(path.resolve('build/cert/server.key')),
//   cert: fs.readFileSync(path.resolve('build/cert/server.crt'))
// }



// var server = https.createServer(certOptions, app).listen(1337, () => {
// 		console.log("Express.js server running on port 1337");
// 	});

// app.use(express.logger('dev'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(passport.initialize());
app.use(passport.session());

require('./app/routes.js')(app, passport);

app.listen(port, () => {
	console.log("Server running on port 1337");
});
