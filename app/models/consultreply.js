// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var consultreplySchema = mongoose.Schema({

    product_id :String,
    consult_id : String,
    consult_status : String,
    comment : String,
    datetime : String,
    query : String,
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Consultreply', consultreplySchema);
