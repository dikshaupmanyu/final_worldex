// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
     'clientID'      : '1393661524086784', // your App ID
     'clientSecret'  : '58234db37823bb86b021f754e185f37f', // your App Secret
    // 'callbackURL'   : 'http://localhost:5555/auth/facebook/callback'
     'callbackURL'   : 'http://ec2-54-234-40-96.compute-1.amazonaws.com:5555/auth/facebook/callback'
    },

	'twitterAuth' : {
		'consumerKey' 		: 'your-consumer-key-here',
		'consumerSecret' 	: 'your-client-secret-here',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
     'clientID'      : '880588681347-m5c6eck9tbrlogku2g121m71eavta91q.apps.googleusercontent.com',
     'clientSecret'  : 'me41ipvQwO6-GTDNMZj5_2yL',
     'callbackURL'   : 'http://localhost:5555/auth/google/callback'
    }

};