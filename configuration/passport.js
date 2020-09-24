var FacebookStrategy = require('passport-facebook');
var config = require('./config');
var axios = require('axios');

 module.exports = function(passport) {

 	passport.serializeUser(function(user, done) {
	  done(null, user);
	});

	passport.deserializeUser(function(obj, done) {
	  done(null, obj);
	});

	passport.use(
	new FacebookStrategy(
	{
		clientID: config.graph_api_id,
		clientSecret: config.graph_api_secret,
        callbackURL: config.callback_url
	},
	function(accessToken, refreshToken, profile, done) {
		var pageID = '';
		var igID = '';
		var igUsername = '';

		console.log("Access Token: " + accessToken); // put accessToken in database for 60 days?
		if (config.use_database) {
			// database usage neo4j login
		}
		var getPagesLink = 'https://graph.facebook.com/v7.0/me/accounts?access_token=' + accessToken;
		
		axios.get(getPagesLink) 
		.then(response => {
			pageID = response.data.data[0].id;
		 	igUsername = response.data.data[0].name;
		 	console.log('Success, the page IDs of the users are: ' + pageID + ' with the IG username: @' + igUsername);

		 	var getIGLink = 'https://graph.facebook.com/v7.0/' + pageID + '?fields=instagram_business_account&access_token=' + accessToken;
				
			axios.get(getIGLink) 
			.then(response => {
				igID = response.data.instagram_business_account.id;
				console.log('Success, the IDs of the Instagram accounts are: ' + igID);
			}).catch(error => {
				console.log('Error');
			});

		}).catch(error => {
			console.log('Error');
		});
		return done(null, profile);
	}));
 };