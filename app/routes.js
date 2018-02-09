module.exports = function(app, passport) {

// normal routes ===============================================================

	// show the home page (will also have our login links)
	app.get('/', function(req, res) {
		res.render('index.ejs');
	});

	// PROFILE SECTION =========================
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user
		});
	});

	app.get('/home', isLoggedIn, function(req, res) {
		res.render('home.ejs', {
			user : req.user
		});
	});

	app.get('/order-medicine', function(req, res) {

		var i = 0;
		var vm = this;
        vm.product = null;
        vm.allProducts = [];

	  var Product       = require('../app/models/products');

   
      Product.find(function (err, product) {
  		// docs is an array
  		  for(var i = 0; i < product.length; i++){
            vm.allProducts[i] = product[i];


        }
 
       var productvalue = JSON.stringify(product);
       var jsonObject = JSON.parse(productvalue);
   
      res.render('order-medicine.ejs', {data: jsonObject,});

      });


	});

	app.get('/order-medicines', isLoggedIn, function(req, res) {

		var i = 0;
		var vm = this;
        vm.product = null;
        vm.allProducts = [];

	  var Product       = require('../app/models/products');

   
      Product.find(function (err, product) {
  		// docs is an array
  		  for(var i = 0; i < product.length; i++){
            vm.allProducts[i] = product[i];


        }
 
       var productvalue = JSON.stringify(product);
       var jsonObject = JSON.parse(productvalue);
   
      res.render('order-medicines.ejs', {data: jsonObject, user : req.user});

      });


	});



	app.get('/order-detail', function(req, res) {

		var i = 0;
		var vm = this;
        vm.product = null;
        vm.allProducts = [];
        vm.products = null;

	  var Product       = require('../app/models/products');

   
      Product.find(function (err, product) {
  		// docs is an array
  		  for(var i = 0; i < product.length; i++){
            vm.allProducts[i] = product[i];


        }
 
       var productvalues = JSON.stringify(product);
       var jsonObjects = JSON.parse(productvalues);

     	var id = req.query.id;

        Product.findById(id, function (err, products) {
       
            for(var i = 0; i < products.length; i++){
            vm.allProducts[i] = products[i];
        }


       var productvalue = JSON.stringify(products);
       var jsonObject = JSON.parse(productvalue);


  

  	 res.render('order-detail.ejs', {data: jsonObject,datas:jsonObjects,id:req.query.id,});



    });

	});


	});

		app.get('/order-details', isLoggedIn, function(req, res) {

		var i = 0;
		var vm = this;
        vm.product = null;
        vm.allProducts = [];
        vm.products = null;

	  var Product       = require('../app/models/products');

   
      Product.find(function (err, product) {
  		// docs is an array
  		  for(var i = 0; i < product.length; i++){
            vm.allProducts[i] = product[i];


        }
 
       var productvalues = JSON.stringify(product);
       var jsonObjects = JSON.parse(productvalues);

     	var id = req.query.id;

        Product.findById(id, function (err, products) {
       
            for(var i = 0; i < products.length; i++){
            vm.allProducts[i] = products[i];
        }


       var productvalue = JSON.stringify(products);
       var jsonObject = JSON.parse(productvalue);


  

  	 res.render('order-details.ejs', {data: jsonObject,datas:jsonObjects,id:req.query.id,user : req.user});



    });

	});


	});

	app.get('/cart', function(req, res) {
		res.render('cart.ejs', {
		});
	});

	app.get('/thanks', function(req, res) {
		res.render('thanks.ejs', {
		});
	});

	app.get('/carts', isLoggedIn, function(req, res) {
		res.render('carts.ejs', {
			user : req.user
		});
	});

	app.get('/order', isLoggedIn, function(req, res) {

	    var i = 0;
		var vm = this;
        vm.order = null;
        vm.allorders = [];

		var Order       = require('../app/models/orders');

   
      Order.find(function (err, order) {
  		// docs is an array
  		  for(var i = 0; i < order.length; i++){
            vm.allorders[i] = order[i];


        }
 
       var productvalue = JSON.stringify(order);
       var jsonObject = JSON.parse(productvalue);
   
      res.render('order.ejs', {data: jsonObject, user : req.user});

      });

	});

	app.get('/list-orderitem', isLoggedIn, function(req, res) {
		//	console.log(req.query.order_id);
		var Order       = require('../app/models/orders');
		var Orderitem       = require('../app/models/orderitem');


		 Orderitem.find(function (err, orderitemnew) {
  		  
  		  console.log(orderitemnew);

     
 

       var orderid = req.query.order_id;
            console.log(orderid);
        


       Orderitem.findById(orderid, function (err, orderitem) {
 
       var productvalue = JSON.stringify(orderitem);

       console.log(jsonObject);

       console.log(orderitem);
   
      res.render('list-orderitem.ejs', {data: jsonObject, user : req.user , orderid : req.query.order_id});

      });

      });  

         }); 
		
	app.get('/res-herbal', function(req, res) {
		res.render('res-herbal.ejs', {
		});
	});

	app.get('/res-herbals', isLoggedIn, function(req, res) {
		res.render('res-herbals.ejs', {
			user : req.user
		});
	});

	app.get('/res-hplc', function(req, res) {
		res.render('res-hplc.ejs', {
		});
	});

	app.get('/res-hplcs', isLoggedIn, function(req, res) {
		res.render('res-hplcs.ejs', {
			user : req.user
		});
	});

	app.get('/res-organic', function(req, res) {
		res.render('res-organic.ejs', {
		});
	});

	app.get('/res-organics', isLoggedIn, function(req, res) {
		res.render('res-organics.ejs', {
			user : req.user
		});
	});

	app.get('/res-philosophy', function(req, res) {
		res.render('res-philosophy.ejs', {
		});
	});

	app.get('/res-philosophys', isLoggedIn, function(req, res) {
		res.render('res-philosophys.ejs', {
			user : req.user
		});
	});

	app.get('/peo-comprofile', function(req, res) {
		res.render('peo-comprofile.ejs', {
		});
	});

	app.get('/peo-comprofiles', isLoggedIn, function(req, res) {
		res.render('peo-comprofiles.ejs', {
			user : req.user
		});
	});

	app.get('/peo-fourgps', function(req, res) {
		res.render('peo-fourgps.ejs', {
		});
	});

	app.get('/peo-fourgpss', isLoggedIn, function(req, res) {
		res.render('peo-fourgpss.ejs', {
			user : req.user
		});
	});



	app.get('/consult-online', function(req, res) {

		res.render('consult-online.ejs', {
		});
	});

	app.get('/consult-onlines',isLoggedIn, function(req, res) {
		res.render('consult-onlines.ejs', {
			user : req.user
		});
	});

    app.post('/charge', function(req, res) {

    	var Order       = require('../app/models/orders');
		var Orderitem       = require('../app/models/orderitem');
		var Transactions       = require('../app/models/transaction');
		var User       = require('../app/models/user');
		var stripe = require("stripe")("sk_test_beRNx3hBDckaj2C0eLZYgrqP");


    	var orderarray = req.body.ordervalues;
		var jsonObjectsss = JSON.parse(orderarray);

		var total = req.body.hdnCartTotals;
		var userid = req.body.userid;
		console.log(userid);
		var dates=  new Date();
		var strDate = (dates.getMonth()+1)+ "-" + dates.getDate() + "-" + dates.getFullYear();
		//console.log(userid);


		//console.log(cartarray);
		//console.log(orderarray);
		//console.log(total);
		var j = 0;

	     for(var j = 0; j < jsonObjectsss.length; j++){
	 		var set = {    
	                userid : req.body.userid,
	               shipfname:jsonObjectsss[0].Shippingfname,
	               shiplname: jsonObjectsss[0].Shippinglname,
	               shipaddress:jsonObjectsss[0].Shippingaddress,
	               shippcode: jsonObjectsss[0].Shippingpcode,
	               shipcity: jsonObjectsss[0].Shippingcity,
	               shipstate: jsonObjectsss[0].Shippingstate,
	               shipcountry: jsonObjectsss[0].Shippingcountry,
	               shipphone: jsonObjectsss[0].Shippingphone,
	               shipemail: jsonObjectsss[0].Shippingemail,
	               shipc_email:jsonObjectsss[0].Shippingcemail,
	               billfname: jsonObjectsss[0].Billingfname,
	               billname: jsonObjectsss[0].Billinglname,
	               billemail: jsonObjectsss[0].Billingemail,
	               billaddress: jsonObjectsss[0].Billingaddress,
	               billcity: jsonObjectsss[0].Billingcity,
	               billstate:jsonObjectsss[0].Billingstate,
	               billcountry:jsonObjectsss[0].Billingcountry,
	                billstate1:jsonObjectsss[0].Billingstate1,
	               billcountry1:jsonObjectsss[0].Billingcountry1,
	               billcode: jsonObjectsss[0].Billingcode,
	               cardname: jsonObjectsss[0].CardName,
	               cardno: jsonObjectsss[0].CardNo,
	               cvvno: jsonObjectsss[0].Cvv,
	               exp_month: jsonObjectsss[0].CardExMnth,
	               exp_days: jsonObjectsss[0].CardExDay,
	              hdnCartTotal : req.body.hdnCartTotals,
	              o_status :"Pending",
	              payment_method: "Card",
	              datetime: strDate



	        };

	       var orders = new Order(set);

			orders.save(function(error, doc){
			    if(error){
			        res.json(error);
			    }
			    else{
			    	
			       // res.json(data);
			      console.log(doc); 

			       var objectId = doc._id; // this will return the id of object inserted
					//console.log(objectId);
					 newvalue = objectId;   

					//console.log(newvalue);  

					//return objectId; 


			Order.findOne({'_id': newvalue},function(err,docs){ 
		        console.log(docs);	
				var i = 0;
				var _id=docs._id;
				var shipfname =docs.shipfname;
				var shipaddress =docs.shipaddress;
				var shippcode = docs.shippcode ;
				var shipcity = docs.shipcity ;
				var shipcountry = "US" ;
				var shipstate = docs.shipstate ;
				var shipcountry = docs.shipcountry ;
				var shipphone = docs.shipphone ;
				var total = 0 ;
				var cartarray = req.body.cartvalues;
				var datacart = JSON.parse(cartarray);
				
				var finalval= newvalue;

				
	         for(var i = 0; i < datacart.length; i++){
	      
				//console.log(jsonObject[0].Product);
				 var total = total + (datacart[i].Price * datacart[i].Qty);
				// console.log(total);
				 var sets = {    
				                orderid : objectId,
				                productname: datacart[i].Product,
				                productprice: datacart[i].Price,
				                productqty: datacart[i].Qty ,
				                datetime: strDate
				            };

				var orderitem = new Orderitem(sets);
				 
			

				orderitem.save(function(error, datas){
			    if(error){
			        res.json(error);
			    }
			    else{
			    	console.log(datas);
			    	//res.json(datas);
			     }


			    });

             }

	
			 console.log(newvalue);  
			 var finalval= newvalue;  

			var stripe = require("stripe")("sk_test_beRNx3hBDckaj2C0eLZYgrqP");
			//console.log(req);
			// Token is created using Stripe.js or Checkout!
			// Get the payment token ID submitted by the form:
			var token = req.body.stripeToken; // Using Express
			var email = req.body.stripeEmail;
			var finalval= newvalue;


			//console.log(finalval);
			// Charge the user's card:

			if(userid == 'guest'){
			  console.log("I am Guest User");

			  var charge = stripe.charges.create({
			  amount: total*100,
			  currency: "usd",
			 // email: email,
			  source: token,
			}, function(err, charge) {
			  // asynchronously called
			  //var payment = JSON.stringify(charge);
			  console.log(charge);
			 var set = {    
			                userid : "guest",
			                orderid : finalval,
			                paymentId: charge.id,
			                amount: charge.amount,
			                balance_transaction: charge.balance_transaction, 
			                created: charge.created, 
			                paid_status: charge.paid,
			                sourceId: charge.source.id, 
			                sourceObject: charge.source.object,
			                sourceBrand: charge.source.brand,
			                sourceCountry: charge.source.country,
			                sourceExpMonth: charge.source.exp_month, 
			                sourceExpYears: charge.source.exp_year, 
			                sourceFingerprint: charge.source.fingerprint, 
			                sourceFunding: charge.source.funding, 
			                sourceLast4: charge.source.last4,
			                sourceName: charge.source.name, 
			                datetime: strDate
			            };



				var transaction = new Transactions(set);
				 
			

				transaction.save(function(error, datas){
			    if(error){
			        res.json(error);
			    }
			    else{
			    	console.log(datas);
			    	var objectId = datas._id;
			    	//res.json(datas);
			     }


			    });        


			});

			//return res.redirect('thanks');


			} 
			else {

			   console.log("I am Loggedin User");
			//console.log(finalval);

			  stripe.customers.create({
			 //  amount: total,
			 // currency: "usd",
			  email: email,
			  source: token,
			}).then(function(customer) {
			  // asynchronously called
			   //var customercreate = JSON.stringify(customer);
			  // console.log(customer);

			  //var amount = Math.round(total*100);

			   console.log(total);

			               
			  return stripe.charges.create({
			          amount: total*100,
			          currency: "usd",
			          customer: customer.id,
			        });




			    }).then(function(charge) {
			     //var payment = JSON.stringify(charge);

			      console.log(charge);
		   	 //console.log(charge.customer);
			 var _id=req.body.userid;
			 var set = {    
			                userid : _id,
			                orderid : finalval,
			                paymentId: charge.id,
			                amount: charge.amount,
			                balance_transaction: charge.balance_transaction, 
			                created: charge.created, 
			                paid_status: charge.paid,
			                sourceId: charge.source.id, 
			                sourceObject: charge.source.object,
			                sourceBrand: charge.source.brand,
			                sourceCountry: charge.source.country,
			                sourceExpMonth: charge.source.exp_month, 
			                sourceExpYears: charge.source.exp_year, 
			                sourceFingerprint: charge.source.fingerprint, 
			                sourceFunding: charge.source.funding, 
			                sourceLast4: charge.source.last4,
			                sourceName: charge.source.name, 
			                datetime: strDate
			            };



			  	var transaction = new Transactions(set);
				 
			

				transaction.save(function(error, datas){
			    if(error){
			        res.json(error);
			    }
			    else{
			    	console.log(datas);
			    	var objectId = datas._id;
			    	//res.json(datas);
			     }


			    });     

			    User.findById(_id, function (err, user) {
			        
			        console.log(user.stripeChargeCustomerId);

			        if(!user.stripeChargeCustomerId){
			          User.update(
			            { _id: _id },
			            { $set: {stripeChargeCustomerId:charge.customer} },
			            function (err, doc) {
			               console.log(doc);         
			            });  

			        }else{
			        }

			    });


			            });

			   // return res.redirect('charge_thanks');


			}


			      });

			if(userid == 'guest'){

			return res.redirect('thanks');
			} else{

			return res.redirect('charge_thanks');

			  }


			}

	});

	}

	});



	app.post('/consultonlinedata-insert', function(req, res) {
	    var express = require('express');
		var router = express.Router();
		var mongoose = require('mongoose');
		var multer = require('multer');
		var path = require('path');
       	var storage = multer.diskStorage({
		 destination: function(req, file, cb) {
		 cb(null, 'public/uploads/consults/')
		 },
		 filename: function(req, file, cb) {
		 cb(null, file.originalname);
		 }
		});
		 
		var upload = multer({
		 storage: storage
		});
		console.log(req.files);
		var path = req.files.path;
        var imageName = req.files.originalname; 
        var imagepath = {};
        imagepath['path'] = path;
        imagepath['originalname'] = imageName;


		var Consult  = require('../app/models/consults');

		var dates=  new Date();
        var strDate = (dates.getMonth()+1)+ "-" + dates.getDate() + "-" + dates.getFullYear();
        var base64 = require('base-64');
          
		var setencode = {    
                userid : req.body.userid,
               problem: base64.encode(req.body.problem),
               problemdetail: base64.encode(req.body.problemdetail),
               problemarea : base64.encode(req.body.problemarea),
               datetime : strDate,
               view_consult_status: "0",
               myimage: imagepath      
        };	


		var consults = new Consult (setencode);
		consults.save(function(error, dataconsult){
			    if(error){
			        res.json(error);
			    }
			    else{
			       // res.json(data);
			      console.log(dataconsult); 
			  }
		});

		res.render('consult-onlines.ejs', {
			user : req.user
		});
	});

	app.get('/account',isLoggedIn, function(req, res) {
		res.render('account.ejs',  {
			user : req.user
		});
	});

	app.post('/profile-update', isLoggedIn, function(req, res) {

		var User       = require('../app/models/user');
		var dates=  new Date();
        var strDate = (dates.getMonth()+1)+ "-" + dates.getDate() + "-" + dates.getFullYear();

		var _id = req.body.userid;
		console.log(_id);

		var user_role = req.body.user_role;

         User.findById(_id, function (err, user) {
			        
			  //      console.log(user._id);

			          User.update(
			            { _id: _id },
			            { $set: {  firstName: req.body.firstName,
					               lastName: req.body.lastName,
					               phone :req.body.phone,
					               user_role : req.body.user_role,
					               address : req.body.address,
					               datetime : strDate} 
					     },
			            function (err, doc) {
			               console.log(doc);        
			            });  

			    });

		res.render('account.ejs', {
			user : req.user
		});
	});


		app.post('/image-upload', isLoggedIn, function(req, res) {
		  var multer = require('multer');
		  var storage = multer.diskStorage({
			 destination: function(req, file, cb) {
			 cb(null, 'public/uploads/')
			 },
			 filename: function(req, file, cb) {
			 cb(null, file.originalname);
			 }
			});
			 
		 var upload = multer({
			 storage: storage
			});

		 var User       = require('../app/models/user');

		 var _id = req.body.userid;
	     console.log(_id);
	     console.log(req.files);
         //console.log(req.files.avatar.originalname);
		 var imageName = req.files.avatar.originalFilename;
		 
		 var imagepath = {};
		 imagepath['originalname'] = imageName;

		 var set = {img:imagepath};

         User.findById(_id, function (err, user) {
			        
			           User.update(
			            { _id: _id },
			            { $set: {img:imagepath} 
					     },
			            function (err, doc) {
			               console.log(doc); 
        
			            });  

		   res.render('account.ejs', {
				user : req.user
			});

	    });

		res.render('account.ejs', {
			user : req.user
		});
	});
	

	app.get('/about-worldex', function(req, res) {
		res.render('about-worldex.ejs', {
		});
	});


	app.get('/subscription',isLoggedIn, function(req, res) {
		res.render('subscription.ejs',  {
			user : req.user
		});
	});

	app.post('/subscribe',isLoggedIn, function(req, res) {
		var UserSubscription       = require('../app/models/usersubscription');
		var User       = require('../app/models/user');
    	var stripe = require("stripe")("sk_test_beRNx3hBDckaj2C0eLZYgrqP");
		var token = req.body.stripeToken;
		var stripeCustomerId = req.body.stripeChargeCustomerId;
		//console.log(stripeCustomerId);
		var sub=req.body.sub;
		console.log(sub);
		var unsub=req.body.unsub;
		console.log(unsub);

		 if(sub == 'Subscribe'){

		 console.log("hiii i am subscribe");

		var plan = stripe.plans.create({
		  amount: 0,
		  interval: "month",
		  name: "Free Plan",
		  currency: "usd",
		  id: "Free Plan"
		}, function(err, plan) {
		  // asynchronously called
		  //var payment = JSON.stringify(plan);
		  console.log(plan);

		  });

		var subscription =  stripe.subscriptions.create({ 
		  customer: stripeCustomerId,
		  items: [
		    {
		      plan: "Free Plan",
		    },
		  ]
		}, function(err, subscription) {
		  
		    console.log(subscription);
		  // asynchronously called
		    var _id=req.body.userid;
		    console.log(_id);
		    var dates=  new Date();
		    var sets = {subscriptionid: subscription.id,userid : _id,customerid:stripeCustomerId,subscriptionplan:subscription.plan,subscriptionstatus:subscription.status,subscriptioncreate:subscription.created,subscriptionstart:subscription.current_period_start,subscriptionend:subscription.current_period_end,subscriptionitem:subscription.items.data,};
		    var usersubscription = new UserSubscription(sets);
			usersubscription.save(function(error, dataconsult){
				    if(error){
				        res.json(error);
				    }
				    else{
				      console.log(dataconsult); 
				      var subiidd = dataconsult.subscriptionid;
		               console.log(dataconsult.subscriptionid);
		              User.findById(_id, function (err, user) {
			        
			           User.update(
			            { _id: _id },
			            { $set: {subscriptionId:subiidd,subscriptionname:"Free Plan",} 
					     },
			            function (err, doc) {
			               console.log(doc); 
        
			            });  
				    });   
 
				  }
			});


		});

		//});
		 } 
		 if(sub != 'Subscribe')
		 {
		console.log("hiii i am unsubscribe");
		    var dates=  new Date();
		    var _id = req.body.userid;
		     User.findById(_id, function (err, user) {
			     console.log(user.subscriptionId);  
			      var subids = user.subscriptionId;
			        var confirmation = stripe.subscriptions.del(subids, function(err, confirmation) {
		    // asynchronously called
		                console.log(confirmation);

		                 var sets = {
		                  subscriptionid: subids,
		                  userid : _id,
		                  customerid:stripeCustomerId,
		                  subscriptionplan:confirmation.plan,
		                  subscriptionstatus:confirmation.status,
		                  subscriptioncreate:confirmation.create,
		                  subscriptionstart:confirmation.current_period_start,
		                  subscriptionend:confirmation.current_period_end,
		                  subscriptionitem:confirmation.items,
		                };
		              var usersubscription = new UserSubscription(sets);
					    usersubscription.save(function(err, doc){  
		                var _id = req.body.userid;
		                   User.update(
					            { _id: _id },
					            { $set: {subscriptionId:"",subscriptionname:"Not Active",} 
							     },
					            function (err, doc) {
					               console.log(doc); 
        					 }); 
		               
		                }); 

		          }); 
				    }); 
		         
		   

		 }		
		 return res.redirect('/subscription');

		//  res.render('subscription.ejs',  {

		// 	user : req.user
		// });
	});

	app.post('/card-save',isLoggedIn, function(req, res) {
	    var User       = require('../app/models/user');

		var stripe = require("stripe")("sk_test_beRNx3hBDckaj2C0eLZYgrqP");

		var token = req.body.stripeToken; // Using Express
		var email = req.body.stripeEmail;
		var total = "60";
		 //console.log("I am Loggedin User");

		 var customer = stripe.customers.create({
		 //  amount: total,
		 // currency: "usd",
		  email: email,
		  source: token,

		    }).then(function(customer) {
		  console.log(customer);
		  var _id = req.body.userid;
         User.findById(_id, function (err, user) {
		        // console.log(user);
		      //  console.log(user.stripeChargeCustomerId);

		        if(!user.stripeChargeCustomerId){
		          User.update(
		            { _id:_id },
		            { $set: {stripeChargeCustomerId:customer.id,customerData: customer.sources.data, } },
		            function (err, doc) {
		                 console.log(doc);              
		            });  

		          };
            });

        }); 

	 return res.redirect('/subscription');
   
		// res.render('subscription.ejs',  {
		// 	user : req.user
		// });
	});

	app.get('/health-provider', function(req, res) {
		res.render('health-provider.ejs', {
		});
	});

	app.get('/download-app', function(req, res) {
		res.render('download-app.ejs', {
		});
	});

	app.get('/checkout', function(req, res) {
		res.render('checkout.ejs', {
		});
	});

	app.get('/checkouts', function(req, res) {
		res.render('checkouts.ejs',  {
			user : req.user
		});
	});

	app.get('/thankyou', function(req, res) {
		res.render('thankyou.ejs', {
		});
	
	});

	app.get('/paypal_thankyou', function(req, res) {
		res.render('paypal_thankyou.ejs', {
			user : req.user
		});
	
	});

	app.get('/charge_thanks', function(req, res) {
		res.render('charge_thanks.ejs', {
			user : req.user
		});
	
	});

	app.post('/checkout-function', function(req, res) {

		var Order       = require('../app/models/orders');
		var Orderitem       = require('../app/models/orderitem');
		var paypal = require('paypal-rest-sdk');
		require('paypal-rest-sdk/lib/configure');
		var newvalue = 0;
		 var paypalCredentials = {
		    "host" : "api.sandbox.paypal.com",
		    "port" : "",
		    "client_id" : "EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM",
		    "client_secret" : "EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM"
		};
		paypal.configure(paypalCredentials);


		var cartarray = req.body.cartvalue;
		//console.log(cartarray);
		var jsonObject = JSON.parse(cartarray);
		var userid =  req.body.userid;
		var dates=  new Date();
		var strDate = (dates.getMonth()+1)+ "-" + dates.getDate() + "-" + dates.getFullYear();

        var set = {    
                userid : req.body.userid,
               shipfname: req.body.shipfname,
               shiplname: req.body.shiplname,
               shipaddress: req.body.shipaddress,
               shippcode: req.body.shippcode,
               shipcity: req.body.shipcity,
               shipstate: req.body.shipstate,
               shipcountry: req.body.shipcountry,
               shipphone: req.body.shipphone,
               shipemail: req.body.shipemail,
               shipc_email: req.body.shipc_email,
               billfname: req.body.billfname,
               billname: req.body.billname,
               billemail: req.body.billemail,
               billaddress: req.body.billaddress,
               billcity: req.body.billcity,
               billstate: req.body.billstate,
               billstate1: req.body.billstate1,
               billcountry: req.body.billcountry,
               billcountry1: req.body.billcountry1,
               billcode: req.body.billcode,
               cardname: req.body.cardname,
               cardno: req.body.cardno,
               cvvno: req.body.cvvno,
               exp_month: req.body.exp_month,
               exp_days: req.body.exp_days,
               hdnCartTotal : req.body.hdnCartTotal,
               o_status :"Pending",
               payment_method: "Paypal",
               datetime: strDate
        };	


		 	var orders = new Order(set);

			orders.save(function(error, data){
			    if(error){
			        res.json(error);
			    }
			    else{
			    	
			       // res.json(data);
			      console.log(data); 

			       var objectId = data._id; // this will return the id of object inserted
					//console.log(objectId);
					 newvalue = objectId;   

					//console.log(newvalue);  

					//return objectId; 


				Order.findOne({'_id': newvalue},function(err,docs){
				console.log(docs);	
				var i = 0;
				var _id=docs._id;
				var shipfname =docs.shipfname;
				var shipaddress =docs.shipaddress;
				var shippcode = docs.shippcode ;
				var shipcity = docs.shipcity ;
				var shipcountry = "US" ;
				var shipstate = docs.shipstate ;
				var shipcountry = docs.shipcountry ;
				var shipphone = docs.shipphone ;
				
				var finalval= newvalue;

				//console.log(docs);

				var jsonObject = JSON.parse(cartarray);
				console.log(jsonObject.length);
				console.log(jsonObject);

				var total = 0 ;
				         for(var i = 0; i < jsonObject.length; i++){
				      
				//console.log(jsonObject[0].Product);
				 var total = total + (jsonObject[i].Price * jsonObject[i].Qty);
				// console.log(total);
				 var sets = {    
				                orderid : finalval,
				                productname: jsonObject[i].Product,
				                productprice: jsonObject[i].Price,
				                productqty: jsonObject[i].Qty ,
				                datetime: strDate
				               // totalprice: "1",
				               // grandtotalprice: "1" 
				              
				            };

				var orderitem = new Orderitem(sets);
				 
			

				orderitem.save(function(error, datas){
			    if(error){
			        res.json(error);
			    }
			    else{
			    	console.log(datas);
			    	//res.json(datas);
			     }

			    });




			//	 return res.redirect('app/#/index' );





				}


			     if(userid == "guest"){

				  console.log("guest checkout");

				  var create_payment_json = {
				    "intent": "sale",
				    "redirect_urls": {
				    // "return_url": "http://ec2-34-235-127-11.compute-1.amazonaws.com:5555/thankyou",
				   //  "cancel_url": "http://ec2-34-235-127-11.compute-1.amazonaws.com:5555/checkout"
				    "return_url": "http://localhost:5555/paypal_loginbefore_update",
				    "cancel_url": "http://localhost:5555/checkout"
				    },
				    "payer": {
				        "payment_method": "paypal",
				        "payer_info": {
				            "tax_id_type": "BR_CPF",
				            "tax_id": "Fh618775690"
				        }
				    },
				    "transactions": [
				        {
				            "amount": {
				                "total": total,
				                "currency": "USD"
				                
				            },
				            "description": "This is the payment transaction description.",
				            "custom": "EBAY_EMS_90048630024435",
				            "invoice_number": "48787589677",
				            "payment_options": {
				                "allowed_payment_method": "INSTANT_FUNDING_SOURCE"
				            },
				            "soft_descriptor": "ECHI5786786",
				            "item_list": {                      
				                "shipping_address": {
				                    "recipient_name": shipfname,
				                    "line1": shipaddress,
				                    "city": shipcity,
				                    "country_code": shipcountry,
				                    "postal_code": shippcode,
				                    "phone": shipphone,
				                    "state": shipstate
				                }

				                   
				            }
				        }
				    ]
				};

				app.get('/paypal_loginbefore_update', function(req, res) {
           			  console.log(res);
					 var Order   = require('../app/models/orders');
				        var _id = newvalue;
				         Order.findById(_id, function (err, user) {
						        // console.log(user);
						      //  console.log(user.stripeChargeCustomerId);
						          Order.update(
						            { _id:_id },
						            { $set: {paymentId: req.query.paymentId,token : req.query.token,PayerID :req.query.PayerID,o_status :"Done" } },
						            function (err, doc) {
						                 console.log(doc);              
						            });  

				            });


			

				       	 return res.redirect('/thankyou');

							});

				} else{

				console.log("paypal");
				var create_payment_json = {
				    "intent": "sale",
				    "redirect_urls": {
				   //  "return_url": "http://ec2-34-235-127-11.compute-1.amazonaws.com:5555/paypal_thankyou",
				   //  "cancel_url": "http://ec2-34-235-127-11.compute-1.amazonaws.com:5555/app/#/checkout"
				     "return_url": "http://localhost:5555/paypal_update",
				     "cancel_url": "http://localhost:5555/checkouts"
				    },
				    "payer": {
				        "payment_method": "paypal",
				        "payer_info": {
				            "tax_id_type": "BR_CPF",
				            "tax_id": "Fh618775690"
				        }
				    },
				    "transactions": [
				        {
				            "amount": {
				                "total": total,
				                "currency": "USD"
				                
				            },
				            "description": "This is the payment transaction description.",
				            "custom": "EBAY_EMS_90048630024435",
				            "invoice_number": "48787589677",
				            "payment_options": {
				                "allowed_payment_method": "INSTANT_FUNDING_SOURCE"
				            },
				            "soft_descriptor": "ECHI5786786",
				            "item_list": {
				                
				                "shipping_address": {
				                    "recipient_name": shipfname,
				                    "line1": shipaddress,
				                    "city": shipcity,
				                    "country_code": shipcountry,
				                    "postal_code": shippcode,
				                    "phone": shipphone,
				                    "state": shipstate
				                }
				            }
				        }
				    ]
				};


				app.get('/paypal_update',isLoggedIn, function(req, res) {
           			  console.log(res);
					 var Order   = require('../app/models/orders');
				        var _id = newvalue;
				         Order.findById(_id, function (err, user) {
						        // console.log(user);
						      //  console.log(user.stripeChargeCustomerId);
						          Order.update(
						            { _id:_id },
						            { $set: {paymentId: req.query.paymentId,token : req.query.token,PayerID :req.query.PayerID,o_status :"Done" } },
						            function (err, doc) {
						                 console.log(doc);              
						            });  

				            });

				       	 return res.redirect('/paypal_thankyou');
					});

				}




				
				paypal.payment.create(create_payment_json, function (error, payment) {
				    if (error) {
				        console.log(error);
				    } else {
				      req.session.paymentId = payment.id;
				            	var _id = newvalue ;
				               	console.log(_id);
				               	console.log("order id is  " + newvalue);
				                orders.update({ '_id': newvalue },{ "$set": {  paymentId : req.session.paymentId,
											//token : req.query.token,
											//PayerID : req.query.PayerID,
											o_status : "Done"
										}},
							    function (err, raw) {
							        if (err) {
							            console.log('Error log: ' + err)
							        } else {
							            console.log("Token updated: " + raw);
							        }
							    }
							);


						//  Order.findById({ '_id': newvalue }, function (err, orderss) {
						//     orders.update({  paymentId : req.session.paymentId,
						// 					token : req.query.token,
						// 					PayerID : req.query.PayerID,
						// 					o_status : "Done"
						// 				}).exec();
						//     console.log(orderss);
						// });
	

				             
				       var redirectUrl;
				        for (var index = 0; index < payment.links.length; index++) {
				        //Redirect user to this endpoint for redirect url
				            if (payment.links[index].rel === 'approval_url') {

				            	 console.log(payment.links[index].href);	

				            	  res.redirect(payment.links[index].href);   

				            }

				        }
				    }
				});

				


				exports.execute = function(req, res){
				console.log(res);
				var payerId = req.param('PayerID');
				console.log(payerId);
				var execute_payment_json = {
				    "payer_id": payerId,
				    "transactions": [{
				        "amount": {
				            "currency": "USD",
				            "total": total
				        }
				    }]
				};

				var paymentId = req.session.paymentId;

				paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
				    if (error) {
				        console.log(error);
				    } else {
				        console.log("Get Payment Response");
				        console.log(JSON.stringify(payment));

				    }
				});
				};



				exports.cancel = function(req, res){
				  res.send("The payment got canceled");
				};

			});

			}

			 
          

			});
			});

				
		
		
		       
				   
 	//res.render('checkout-function.ejs', {
		// });




	// LOGOUT ==============================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

	// locally --------------------------------
		// LOGIN ===============================
		// show the login form
		app.get('/login', function(req, res) {
			res.render('login.ejs', { message: req.flash('loginMessage') });
		});

		// process the login form
		app.post('/login', passport.authenticate('local-login', {
			successRedirect : '/home', // redirect to the secure profile section
			failureRedirect : '/login', // redirect back to the signup page if there is an error
			failureFlash : true // allow flash messages
		}));

		// SIGNUP =================================
		// show the signup form
		app.get('/signup', function(req, res) {
			res.render('signup.ejs', { message: req.flash('loginMessage') });
		});

		// process the signup form
		app.post('/signup', passport.authenticate('local-signup', {
			successRedirect : '/profile', // redirect to the secure profile section
			failureRedirect : '/signup', // redirect back to the signup page if there is an error
			failureFlash : true // allow flash messages
		}));

	// facebook -------------------------------

		// send to facebook to do the authentication
		app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email'] }));

		// handle the callback after facebook has authenticated the user
		app.get('/auth/facebook/callback',
			passport.authenticate('facebook', {
				failureRedirect : '/'
			}));

	// twitter --------------------------------

		// send to twitter to do the authentication
		app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));

		// handle the callback after twitter has authenticated the user
		app.get('/auth/twitter/callback',
			passport.authenticate('twitter', {
				successRedirect : '/profile',
				failureRedirect : '/'
			}));


	// google ---------------------------------

		// send to google to do the authentication
		app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

		// the callback after google has authenticated the user
		app.get('/auth/google/callback',
			passport.authenticate('google', {
				successRedirect : '/profile',
				failureRedirect : '/'
			}));

// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================

	// locally --------------------------------
		app.get('/connect/local', function(req, res) {
			res.render('connect-local.ejs', { message: req.flash('loginMessage') });
		});
		app.post('/connect/local', passport.authenticate('local-signup', {
			successRedirect : '/profile', // redirect to the secure profile section
			failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
			failureFlash : true // allow flash messages
		}));

	// facebook -------------------------------

		// send to facebook to do the authentication
		app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

		// handle the callback after facebook has authorized the user
		app.get('/connect/facebook/callback',
			passport.authorize('facebook', {
				successRedirect : '/profile',
				failureRedirect : '/'
			}));

	// twitter --------------------------------

		// send to twitter to do the authentication
		app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

		// handle the callback after twitter has authorized the user
		app.get('/connect/twitter/callback',
			passport.authorize('twitter', {
				successRedirect : '/profile',
				failureRedirect : '/'
			}));


	// google ---------------------------------

		// send to google to do the authentication
		app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

		// the callback after google has authorized the user
		app.get('/connect/google/callback',
			passport.authorize('google', {
				successRedirect : '/profile',
				failureRedirect : '/'
			}));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

	// local -----------------------------------
	app.get('/unlink/local', function(req, res) {
		var user            = req.user;
		user.local.email    = undefined;
		user.local.password = undefined;
		user.save(function(err) {
			res.redirect('/profile');
		});
	});

	// facebook -------------------------------
	app.get('/unlink/facebook', function(req, res) {
		var user            = req.user;
		user.facebook.token = undefined;
		user.save(function(err) {
			res.redirect('/profile');
		});
	});

	// twitter --------------------------------
	app.get('/unlink/twitter', function(req, res) {
		var user           = req.user;
		user.twitter.token = undefined;
		user.save(function(err) {
			res.redirect('/profile');
		});
	});

	// google ---------------------------------
	app.get('/unlink/google', function(req, res) {
		var user          = req.user;
		user.google.token = undefined;
		user.save(function(err) {
			res.redirect('/profile');
		});
	});


};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}