const axios = require('axios').default;

module.exports = function(app, passport) {
	app.get('/', (req, res) => {
	res.render("home", {
		user: req.user,
	})
})

	app.get('/auth/instagram', passport.authenticate('facebook',{scope:'public_profile,email,instagram_basic,pages_show_list,ads_read,instagram_manage_insights,instagram_manage_comments,pages_read_engagement'})); // add more

	app.get('/auth/instagram/callback',
	passport.authenticate('facebook', { failureRedirect: '/login' }),
	function(req, res) {
	   // console.log("req", req.user)
		res.render("data", {
			user: req.user,
		})
	});

    // assuming here that we have accessToken + igID + igUsername stored in database, and we are fetching it
	var accessToken = "EAAJ8AMvFSQ0BAIUYCGGbwCAFlafpyc3zEN3OI6T6mVJGQRwB29ZA3oG69udxojZB1M56aYQ9F5Vw5f4BZBZALJt1hq35cgpZC6y32gTsSjfMPVyWNbRZC9vzUts2WToH3zekuQqDVvo9gH7Iob4lVUqOfZBbPatZBCHZCpoZCHJ4kOKAZDZD";
	var igID = "17841407391222597";

	app.get('/instagram/metadata/:username', (req, res, next) => {
		var username = req.params.username;
		console.log("Getting metadata from IG (business + creators only) @" + username);
		var endpoint = "https://graph.facebook.com/v7.0/" + igID + "?fields=business_discovery.username(" + username + "){name,followers_count,follows_count,media_count}&access_token=" + accessToken;
		axios.get(endpoint)
		.then(response => {
			console.log(response.data);
			res.send(response.data);
		})
		.catch(function(error) {
			console.log("Error");
			res.end();
		});
	});


	app.get('/instagram/media', (req, res, next) => {
		console.log("Getting media IDs from own account");
		var endpoint = "https://graph.facebook.com/v7.0/" + igID + "/media?fields=media_url,comments_count,comments.limit(5)&limit=100&access_token=" + accessToken;
		axios.get(endpoint) 
		.then(response => {
			console.log(response.data);
			res.send(response.data);
		}).catch(response => {
			console.log("Error");
			res.end();
		});
	});

	app.get('/instagram/stories', (req, res, next) => {
		console.log("Getting story IDs from own account");
		var endpoint = "https://graph.facebook.com/v7.0/" + igID + "/stories?access_token=" + accessToken;
		axios.get(endpoint) 
		.then(response => {
			console.log(response.data);
			res.send(response.data);
		}).catch(response => {
			console.log("Error");
			res.end();
		});
	});

	app.get('/instagram/stories/:storyid', (req, res, next) => {
		var id = req.params.storyid;
		console.log("Getting insights for story ID: " + id);
		var endpoint = "https://graph.facebook.com/v7.0/" + id + "/insights?metric=exits,impressions,reach,replies,taps_forward,taps_back&access_token=" + accessToken;
		axios.get(endpoint) 
		.then(response => {
			console.log(response.data);
			res.send(response.data);
		}).catch(response => {
			console.log("Error");
			res.end();
		});
	});

	app.get('/instagram/insights/:mediaid', (req, res, next) => {
		var id = req.params.mediaid;
		console.log("Getting insights of media: " + id + " from own account");
		var endpoint = "https://graph.facebook.com/v7.0/" + id + "/insights?metric=impressions,engagement,reach,saved&access_token=" + accessToken;
		axios.get(endpoint) 
		.then(response => {
			console.log(response.data);
			res.send(response.data);
		}).catch(response => {
			console.log("Error");
			res.end();
		});
	});

	app.get('/instagram/audience', (req, res, next) => {
		console.log("Getting audience insights of own IG profile: ");
		var endpoint = "https://graph.facebook.com/v7.0/" + igID + "/insights?metric=audience_city,audience_country,audience_gender_age,audience_locale&period=lifetime&access_token=" + accessToken;
		axios.get(endpoint) 
		.then(response => {
			console.log(response.data);
			res.send(response.data);
		}).catch(response => {
			console.log("Error");
			res.end();
		});
	});

	app.get('/instagram/profile', (req, res, next) => {
		console.log("Getting profile insights of own IG profile: ");
		var endpoint = "https://graph.facebook.com/v7.0/" + igID + "/insights?metric=email_contacts,get_directions_clicks,impressions,profile_views,reach,website_clicks&period=day&access_token=" + accessToken;
		axios.get(endpoint) 
		.then(response => {
			console.log(response.data);
			res.send(response.data);
		}).catch(response => {
			console.log("Error");
			res.end();
		});
	});

	app.get('/instagram/followers', (req, res, next) => {
		console.log("Getting number of new followers with pagination: ");
		var endpoint = "https://graph.facebook.com/v7.0/" + igID + "/insights?metric=follower_count&period=day&access_token=" + accessToken;
		axios.get(endpoint) 
		.then(response => {
			console.log(response.data);
			res.send(response.data);
		}).catch(response => {
			console.log("Error");
			res.end();
		});
	});
	// 17864465794934958
	// 17864959501902696
	// comment 17881456078669634
	app.get('/instagram/comments/:mediaid', (req, res, next) => {
		var id = req.params.mediaid;
		console.log("Getting comments on media: " + id + " from own account");
		var endpoint = "https://graph.facebook.com/v7.0/" + id + "/comments?fields=timestamp,like_count,username,text,replies&limit=100&access_token=" + accessToken;
		axios.get(endpoint) 
		.then(response => {
			console.log(response.data);
			res.send(response.data);
		}).catch(response => {
			console.log("Error");
			res.end();
		});
 	});

 	app.get('/instagram/comments/replies/:commentid', (req, res, next) => {
		var id = req.params.commentid;
		console.log("Getting replies from comment: " + id + " from own account");
		var endpoint = "https://graph.facebook.com/v7.0/" + id + "/replies?access_token=" + accessToken;
		axios.get(endpoint) 
		.then(response => {
			console.log(response.data);
			res.send(response.data);
		}).catch(response => {
			console.log("Error");
			res.end();
		});
 	});

 	app.delete('/instagram/comments/:commentid', (req, res, next) => {
 		var id = req.params.commentid;
 		console.log("Deleting comment: " + id + " from own account");
 		var endpoint = "https://graph.facebook.com/v7.0/" + id + "?access_token=" + accessToken;
 		axios.delete(endpoint) 
 		.then(response => {
			console.log(response.data);
			res.send(response.data);
		}).catch(response => {
			console.log("Error deleting the comment");
			res.end();
		});
 	});

 	app.post('/instagram/comments/:commentid', (req, res, next) => {
 		var id = req.params.commentid;
 		var msg = "";
 		console.log("Replying to comment: " + id + " with message: " + msg);
 		var endpoint = "https://graph.facebook.com/v7.0/" + id + "/replies?message=" + msg + "&access_token=" + accessToken;
 		axios.post(endpoint) 
 		.then(response => {
			console.log(response.data);
			res.send(response.data);
		}).catch(response => {
			console.log("Error commenting the message");
			res.end();
		});
 	});

	app.get('/instagram/logout', function(req, res, next) { // this still needs work, can be done with the auto login/logout from fb sdk
		req.logout();
		res.redirect('/');
	});

}

function isLoggedIn(req, res, next) {
 	if (req.isAuthenticated())
   		return next();

	res.redirect('/');
}

