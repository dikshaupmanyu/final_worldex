// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var consultsSchema = mongoose.Schema({

    user_id :String,
    problem : String,
    problemdetail : String,
    problemarea : String,
    datetime : String,
    view_consult_status : String,
  //   myimage: {
  //   	     path: {
		// 	 type: String,
		// 	 required: true,
		// 	 trim: true
		// 	 },
		// 	 originalname: {
		// 	 type: String,
		// 	 required: true
		// 	 }
	 // }
    		

});


// create the model for users and expose it to our app
module.exports = mongoose.model('Consults', consultsSchema);
