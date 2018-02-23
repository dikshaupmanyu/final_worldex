// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var orderSchema = mongoose.Schema({
     
     userid        :String,
     shipfname     : String,
     shiplname     : String,
     shipaddress        :String,
     shippcode     : String,
     shipcity     : String,
     shipstate        :String,
     shipcountry     : String,
     shipphone     : String,
     shipemail        :String,
     shipc_email     : String,
     billfname     : String,
     billname        :String,
     billemail     : String,
     billaddress     : String,
     billcity        :String,
     billstate     : String,
     billstate1     : String,
     billcountry        :String,
     billcountry1     : String,
     billcode     : String,
     cardname        :String,
     cardno     : String,
     cvvno     : String,
     exp_month        :String,
     exp_days     : String,
     hdnCartTotal     : String,
     o_status        :String,
     payment_method     : String,
     datetime     : String,
     paymentId :String,
     token : String,
     PayerID : String,
     orderstatus : String


});


// create the model for users and expose it to our app
module.exports = mongoose.model('Orders', orderSchema);
