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

  // PROFILE SECTION =========================



	app.get('/home', isLoggedIn, function(req, res) {
      var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];

    var Consult       = require('../app/models/consults');
        var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;
     
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }

          }

           console.log(readstatuscount);       

          var finalstatusconsult = readstatuscount ;
          console.log(finalstatusconsult);
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
     
        res.render('home.ejs', {loadconsultdata: jsonObject, user : req.user ,totalreadconsultstatus : finalstatusconsult,});

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
        var a = 0;
        vm.consult = null;
        vm.allconsults = [];

      var Consult       = require('../app/models/consults');
      var Product       = require('../app/models/products');


   
       var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;
     
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }

          }

      //     console.log(readstatuscount);       

          var finalstatusconsult = readstatuscount ;
     //     console.log(finalstatusconsult);
   
         var productvalueconsult = JSON.stringify(consult);
         var jsonObjectconsult = JSON.parse(productvalueconsult);
   
        Product.find(function (err, product) {
    		// docs is an array
    		  for(var i = 0; i < product.length; i++){
              vm.allProducts[i] = product[i];


          }
   
         var productvalue = JSON.stringify(product);
         var jsonObject = JSON.parse(productvalue);
   
      res.render('order-medicines.ejs', {data: jsonObject, user : req.user , loadconsultdata: jsonObjectconsult, totalreadconsultstatus : finalstatusconsult,});

      });

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
        var a = 0;
        vm.consult = null;
        vm.allconsults = [];
         var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;

	  var Product       = require('../app/models/products');
    var Consult       = require('../app/models/consults');


     Consult.find(function (err, consult) {
        // docs is an array
          for(var a = 0; a < consult.length; a++){
              vm.allconsults[a] = consult[a];
              if(req.user.user_role == 'user'){

                if(req.user._id == consult[a].user_id){

                      var totalreadstatusc = consult[a].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }
          }
        //  console.log(readstatuscount);       

          var finalstatusconsult = readstatuscount ;
        //  console.log(finalstatusconsult);
   
         var productvalueconsult = JSON.stringify(consult);
         var jsonObjectconsult = JSON.parse(productvalueconsult);

   
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


  

  	 res.render('order-details.ejs', {data: jsonObject,datas:jsonObjects,loadconsultdata: jsonObjectconsult,id:req.query.id,user : req.user,totalreadconsultstatus : finalstatusconsult,});



    });

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
		  var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];

    var Consult       = require('../app/models/consults');
        var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;
     
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }

          }

           //console.log(readstatuscount);       

          var finalstatusconsult = readstatuscount ;
          //console.log(finalstatusconsult);
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
     
        res.render('carts.ejs', {loadconsultdata: jsonObject, user : req.user ,totalreadconsultstatus : finalstatusconsult,});

      });
	});

	app.get('/order', isLoggedIn, function(req, res) {

	    var i = 0;
		var vm = this;
        vm.order = null;
        vm.allorders = [];
        var a = 0;
        vm.consult = null;
        vm.allconsults = [];
        var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;

      var Consult       = require('../app/models/consults');
     	var Order       = require('../app/models/orders');

   
      Order.find(function (err, order) {
  		// docs is an array
  		  for(var i = 0; i < order.length; i++){
            vm.allorders[i] = order[i];


        }
 
       var productvalue = JSON.stringify(order);
       var jsonObject = JSON.parse(productvalue);

         Consult.find(function (err, consult) {
        // docs is an array
          for(var a = 0; a < consult.length; a++){
              vm.allconsults[a] = consult[a];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[a].user_id){

                      var totalreadstatusc = consult[a].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }
          }
         var finalstatusconsult = readstatuscount ; 
         var productvalueconsult = JSON.stringify(consult);
         var jsonObjectconsult = JSON.parse(productvalueconsult);
   
      res.render('order.ejs', {data: jsonObject, user : req.user,loadconsultdata: jsonObjectconsult,totalreadconsultstatus : finalstatusconsult,});

      });

	});

});

	app.get('/manageorder', isLoggedIn, function(req, res) {

	    var i = 0;
		var vm = this;
        vm.order = null;
        vm.allorders = [];
        vm.user = null;
        vm.allusers = [];

		var Order       = require('../app/models/orders');
		var User       = require('../app/models/user');

		 User.find(function (err, user) {
  		// docs is an array
  		  for(var i = 0; i < user.length; i++){
            vm.allusers[i] = user[i];


        }
 
       var uservalue = JSON.stringify(user);
       var jsonObjectuser = JSON.parse(uservalue);


   
      Order.find(function (err, order) {
  		// docs is an array
  		  for(var i = 0; i < order.length; i++){
            vm.allorders[i] = order[i];


        }
 
       var productvalue = JSON.stringify(order);
       var jsonObject = JSON.parse(productvalue);
   
      res.render('manageorder.ejs', {data: jsonObject, datauser: jsonObjectuser, user : req.user});

      });

	});

    });		

    	app.get('/admin', isLoggedIn, function(req, res) {

	    var i = 0;
		var vm = this;
        vm.order = null;
        vm.allorders = [];
        vm.user = null;
        vm.allusers = [];

		var Order       = require('../app/models/orders');
		var User       = require('../app/models/user');

		 User.find(function (err, user) {
  		// docs is an array
  		  for(var i = 0; i < user.length; i++){
            vm.allusers[i] = user[i];


        }
 
       var uservalue = JSON.stringify(user);
       var jsonObjectuser = JSON.parse(uservalue);


   
   
      res.render('admin.ejs', { datauser: jsonObjectuser, user : req.user});

      });

	});


    app.get('/managetransaction', isLoggedIn, function(req, res) {

	    var i = 0;
		var vm = this;
        vm.transaction = null;
        vm.alltransactions = [];
        vm.user = null;
        vm.allusers = [];

		var Transaction       = require('../app/models/transaction');
		var User       = require('../app/models/user');

		 User.find(function (err, user) {
  		// docs is an array
  		  for(var i = 0; i < user.length; i++){
            vm.allusers[i] = user[i];


        }
 
       var uservalue = JSON.stringify(user);
       var jsonObjectuser = JSON.parse(uservalue);


   
      Transaction.find(function (err, transaction) {
  		// docs is an array
  		  for(var i = 0; i < transaction.length; i++){
            vm.alltransactions[i] = transaction[i];


        }
 
       var productvaluetransaction = JSON.stringify(transaction);
       var jsonObjecttransaction = JSON.parse(productvaluetransaction);
   
      res.render('managetransaction.ejs', {data: jsonObjecttransaction, datauser: jsonObjectuser, user : req.user});

      });

	});

    });		 


	app.get('/consult', isLoggedIn, function(req, res , document) {
		

	    var i = 0;
		var vm = this;
        vm.consult = null;
        vm.allconsults = [];
        var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;


	    var Consult       = require('../app/models/consults');
      var base64 = require('base-64');

   
     	 Consult.find(function (err, consult) {
	  		// docs is an array
        var consultproblemall = [];
        var consultproblemdetailall = [];
         var consultproblemareaall = [];
         var consultfinalimage = [];
	  		  for(var i = 0; i < consult.length; i++){
	            vm.allconsults[i] = consult[i];
               if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){


                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }
          consultproblemall[i] = base64.decode(consult[i].problem);  
          consultproblemdetailall[i] = base64.decode(consult[i].problemdetail);
         // console.log(consultproblemdetailall[i]);
          consultproblemareaall[i] = base64.decode(consult[i].problemarea);

           consultfinalimage[i] =  consult[i].myimage.originalname;        

	        }

       var totalconsultproblem = consultproblemall;
       var totalconsultproblemdetail = consultproblemdetailall;
       var totalconsultproblemarea = consultproblemareaall;
        var totalconsultfinalimage = consultfinalimage;


        var finalstatusconsult = readstatuscount ; 
	 
	       var productvalue = JSON.stringify(consult);
	       var jsonObject = JSON.parse(productvalue);

        // console.log(jsonObject);
        
	   
	      res.render('consult.ejs', {data: jsonObject,  user : req.user , totalreadconsultstatus : finalstatusconsult, totalconsultproblems : consultproblemall, totalconsultproblemdetails : consultproblemdetailall, totalconsultproblemareas : consultproblemareaall, totalconsultfinalimages : consultfinalimage});

      });

	});


  app.get('/list-consult-reply', isLoggedIn, function(req, res , document) {
    var consultid = req.query.id;
    var base64 = require('base-64');

        var i = 0;
        var j = 0;
        var k = 0;
        var l = 0;
        var vm = this;
        vm.consult = null;
        vm.allconsults = [];
        vm.user = null;
        vm.allusers = [];
        vm.consultreply = null;
        vm.allconsultreplys = [];
        vm.product = null ;
        vm.allproducts = [];
        var answerstatuscount = 0 ;
        var readstatuscount = 0;
        var totalreadconsultstatus = 0;

      var Consult       = require('../app/models/consults');
      var Product       = require('../app/models/products');
      var User       = require('../app/models/user');
      var Consultreplys       = require('../app/models/consultreply');

       Product.find(function (err, product) {
        // docs is an array
          for(var l = 0; l < product.length; l++){
              vm.allproducts[l] = product[l];
          }
   
         var productvalueproduct = JSON.stringify(product);
         var jsonObjectproduct = JSON.parse(productvalueproduct);

       Consultreplys.find(function (err, consultreply) {
        // docs is an array
          for(var k = 0; k < consultreply.length; k++){
              vm.allconsultreplys[k] = consultreply[k];
          }
   
         var productvalueconsultreply = JSON.stringify(consultreply);
         var jsonObjectconsultreply = JSON.parse(productvalueconsultreply);

      User.find(function (err, user) {
        // docs is an array
          for(var j = 0; j < user.length; j++){
              vm.allusers[j] = user[j];
          }
   
         var productvalueuser = JSON.stringify(user);
         var jsonObjectuser = JSON.parse(productvalueuser);

   
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];
               if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }
          }
          var finalstatusconsult = readstatuscount ;
   
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
     
        res.render('list-consult-reply.ejs', {dataproduct : jsonObjectproduct , data: jsonObject, datauser : jsonObjectuser , dataconsultreply :jsonObjectconsultreply , user : req.user , consultid : req.query.id , totalreadconsultstatus : finalstatusconsult,});

      });

  });

  });

  });

   });    

  app.get('/reply-consult', isLoggedIn, function(req, res , document) {
  var consultid = req.query.id;
    var base64 = require('base-64');

        var i = 0;
        var j = 0;
        var k = 0;
        var vm = this;
        vm.consult = null;
        vm.allconsults = [];
        vm.user = null;
        vm.allusers = [];
        vm.product = null;
        vm.allproducts = [];

      var Consult       = require('../app/models/consults');
      var User       = require('../app/models/user');
      var Product       = require('../app/models/products');

      Product.find(function (err, product) {
        // docs is an array
          for(var k = 0; k < product.length; k++){
              vm.allproducts[k] = product[k];
          }
   
         var productvalueproduct = JSON.stringify(product);
         var jsonObjectproduct = JSON.parse(productvalueproduct);

      User.find(function (err, user) {
        // docs is an array
          for(var j = 0; j < user.length; j++){
              vm.allusers[j] = user[j];
          }
   
         var productvalueuser = JSON.stringify(user);
         var jsonObjectuser = JSON.parse(productvalueuser);

   
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];
          }
   
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
         var jsonObjectconsult =JSON.parse(productvalue);
     
        res.render('reply-consult.ejs', {data: jsonObject, datauser : jsonObjectuser , loadconsultdata : jsonObjectconsult , dataproduct : jsonObjectproduct , user : req.user , consultid : req.query.id});

      });

  });


  });

  });    

    app.get('/review-consult', isLoggedIn, function(req, res , document) {
    var base64 = require('base-64');

      var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];

      var Consult       = require('../app/models/consults');
      var consultproblemall = [];
        var consultproblemdetailall = [];
         var consultproblemareaall = [];
         var consultfinalimage =[];
   
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

      //     $(document).ready(function () {    
      //     $("#problemconsult"+i).val(base64.decode(consults[i].problem));    
      // });
        // document.getElementById("problemconsult"+i).innerHTML = base64.decode(consults[i].problem);
      //    document.getElementById("problemconsultdetail"+i).innerHTML = base64.decode(consults[i].problemdetail);
      //    document.getElementById("problemconsultarea"+i).innerHTML = base64.decode(consults[i].problemarea);

          consultproblemall[i] = base64.decode(consult[i].problem);  
          consultproblemdetailall[i] = base64.decode(consult[i].problemdetail);
         // console.log(consultproblemdetailall[i]);
          consultproblemareaall[i] = base64.decode(consult[i].problemarea);        
            // console.log(consult[i].myimage);
           consultfinalimage[i] = consult[i].myimage.originalname;

            console.log(consult[i].myimage.originalname);
          }

       var totalconsultproblem = consultproblemall;
       var totalconsultproblemdetail = consultproblemdetailall;
       var totalconsultproblemarea = consultproblemareaall;
       var totalconsultimage = consultfinalimage;

   
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
         //console.log(jsonObject.myimage);
         var jsonObjectconsult = JSON.parse(productvalue);
     
        res.render('review-consult.ejs', {data: jsonObject, loadconsultdata : jsonObjectconsult, user : req.user , totalconsultproblems : totalconsultproblem , totalconsultproblemdetails : totalconsultproblemdetail , totalconsultproblemareas : totalconsultproblemarea, totalconsultimages : totalconsultimage,});

      });

  });

	app.get('/list-orderitem', isLoggedIn, function(req, res) {
		//	console.log(req.query.order_id);
		var Order       = require('../app/models/orders');
		var Orderitem       = require('../app/models/orderitem');


	    var i = 0;
		var vm = this;
        vm.order = null;
        vm.allorders = [];
          var a = 0;
        vm.consult = null;
        vm.allconsults = [];
        var answerstatuscount = 0;
        var readstatuscount = 0;
        var totalreadconsultstatus = 0;


      var Consult       = require('../app/models/consults');
   
       Consult.find(function (err, consult) {
        // docs is an array
          for(var a = 0; a < consult.length; a++){
              vm.allconsults[a] = consult[a];
            if(req.user.user_role == 'user'){

                if(req.user._id == consult[a].user_id){

                      var totalreadstatusc = consult[a].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }
          }
          var finalstatusconsult = readstatuscount ;
         var productvalueconsult = JSON.stringify(consult);
         var jsonObjectconsult = JSON.parse(productvalueconsult);
       
   
        Order.find(function (err, order) {
  		// docs is an array
  		  for(var i = 0; i < order.length; i++){
            vm.allorders[i] = order[i];


        }
 
       var productvalues = JSON.stringify(order);
       var jsonObjects = JSON.parse(productvalues);

       var orderid = req.query.order_id;
         //   console.log(orderid);
       Orderitem.findOne({orderid : req.query.order_id}, function (err, orderitem) {
 
       var productvalue = JSON.stringify(orderitem);
        var jsonObject = JSON.parse(productvalue);

       //console.log(jsonObject);

       // console.log(jsonObject.productname);
   
      res.render('list-orderitem.ejs', {data: jsonObject, datas: jsonObjects, loadconsultdata : jsonObjectconsult , user : req.user , orderid : req.query.order_id , totalreadconsultstatus : finalstatusconsult,});

      });


         });

         }); 

     });
		
	app.get('/res-herbal', function(req, res) {
		res.render('res-herbal.ejs', {
		});
	});

	app.get('/delete-consult',isLoggedIn, function(req, res) {
	   var Consult       = require('../app/models/consults');
       Consult.remove({_id : req.query.consultid}, function (err, consults) {
         console.log(consults);    
      });
   return res.redirect('consult');

	});

	app.post('/symptom_insert',isLoggedIn, function(req, res) {
	   var Symptom       = require('../app/models/symptoms');
	   var User       = require('../app/models/user');


	   var userid =  req.body.userid;
	   console.log(userid);

	   var sets = {    
		              userid : req.body.userid,
		              temperatures:req.body.temperatures,
		              // stoolcolor:req.body.stoolcolor,
		               sleep : req.body.sleep,
		               exercise :req.body.exercise,
		               general_energy_level : req.body.general_energy_level,
		               energy_level_after_eating : req.body.energy_level_after_eating,
		               Appetite : req.body.Appetite,
		               Crave_Taste : req.body.Crave_Taste,
		               Avoid_Taste :req.body.Avoid_Taste,
		               Digestion :req.body.Digestion,
		               Stools :req.body.Stools,
		              What_color_are_your_stool :req.body.What_color_are_your_stool,
		               Number_of_daily_bowel_movements :req.body.Number_of_daily_bowel_movements,
		               Urine :req.body.Urine,
		                What_color_is_your_urine :req.body.What_color_is_your_urine,
		                How_often_do_you_urinate_in_a_day :req.body.How_often_do_you_urinate_in_a_day,
		               ReproductionMen :req.body.ReproductionMen,
		               Have_a_genital_discharge_What_color :req.body.Have_a_genital_discharge_What_color,
		               How_often_do_you_engage_in_sex :req.body.How_often_do_you_engage_in_sex,
		                ReproductionWomen :req.body.ReproductionWomen,
		                Clots :req.body.Clots,
		                How_long_is_your_menstrual_cycle_days:req.body.How_long_is_your_menstrual_cycle_days,
		                Is_it_regular:req.body.Is_it_regular,
		                How_long_is_your_menstrual_flow:req.body.How_long_is_your_menstrual_flow,
		                What_color_is_your_menstrual_flow:req.body.What_color_is_your_menstrual_flow,
		                Do_You_use_birth_control_pills_How_long:req.body.Do_You_use_birth_control_pills_How_long,
		                How_many_pregnancies_have_you_had:req.body.How_many_pregnancies_have_you_had,
		                How_many_children_have_you_borne:req.body.How_many_children_have_you_borne,
		                How_many_miscarriages:req.body.How_many_miscarriages,
		                How_many_abortions:req.body.How_many_abortions,
		                Respiration:req.body.Respiration,
		                cough:req.body.cough,
		                Pain:req.body.Pain,
		                Headaches:req.body.Headaches,
		                Eyes:req.body.Eyes,
		                noise_in_ears:req.body.noise_in_ears,
		                Ears:req.body.Ears,
		                Mouth:req.body.Mouth,
		                Teeth:req.body.Teeth,
		                Throat:req.body.Throat,
		                Nose:req.body.Nose,
		                Muscles:req.body.Muscles,
		                Muscle_weakness_Where:req.body.Muscle_weakness_Where,
		                Muscle_tension_Where:req.body.Muscle_tension_Where,
		                Emotional_Mental_Thinking:req.body.Emotional_Mental_Thinking,
		                emotions_predominant:req.body.emotions_predominant,
		                Miscellaneous:req.body.Miscellaneous,
		                feeling_of_heaviness:req.body.feeling_of_heaviness

		        };


				var symptoms = new Symptom(sets);
				symptoms.save(function(error, datas){
			    if(error){
			        res.json(error);
			    }
			    else{
			    	console.log(datas);

			    	//res.json(datas);
				    var _id = req.body.userid;
	               
	                var set = {consult_status:"1"};

			       User.update(
		            { _id: _id },
		            { $set: set },
		            function (err, doc) {
		              
		                 console.log(doc);
		            });


			     }


			    });     

       
		return res.redirect('consult-onlines');
     
	});


  app.post('/reply-consult-insert',isLoggedIn, function(req, res) {
     var Consult       = require('../app/models/consults');
     var Consultreplys       = require('../app/models/consultreply');
     var dates=  new Date();
     var strDate = (dates.getMonth()+1)+ "-" + dates.getDate() + "-" + dates.getFullYear();

     var base64 = require('base-64');

     var consultid =  req.body.consult_id;
     console.log(consultid);

     var set = {
             product_id: req.body.product_id,
             consult_id: req.body.consult_id,
             consult_status: "Answered",
             comment: base64.encode(req.body.comment),
            datetime: strDate
          };


        var consultreply = new Consultreplys(set);
        consultreply.save(function(error, datas){
          if(error){
              res.json(error);
          }
          else{
          //  console.log(datas);

            //res.json(datas);
            var _id = req.body.consult_id;
                 
            var setss = {consult_status:"Answered",view_consult_status: "1"};

             Consult.update(
                { _id: req.body.consult_id },
                { $set: setss },
                function (err, doc) {
                  
                     console.log(doc);
                });


           }


          });     

       
    return res.redirect('review-consult');
     
  });

	app.get('/symptom-user', isLoggedIn, function(req, res) {
      
		var Symptom       = require('../app/models/symptoms');
    var Consult       = require('../app/models/consults');
    var readstatuscount = 0; 
    var answerstatuscount = 0;  
    var totalreadconsultstatus = 0 ;
    var i = 0;
		var vm = this;
        vm.symptoms = null;
        vm.allsymptoms = [];
        vm.consult = null;
        vm.allconsults = [];

       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }

          }

      //console.log(readstatuscount);       
      var finalstatusconsult = readstatuscount ;
      //console.log(finalstatusconsult);

      Symptom.find(function (err, symptoms) {
  		// docs is an array
  		  for(var i = 0; i < symptoms.length; i++){
            vm.allsymptoms[i] = symptoms[i];
       }
       var productvalue = JSON.stringify(symptoms);
        var jsonObject = JSON.parse(productvalue);

       console.log(jsonObject);

   
      res.render('symptom-user.ejs', {data: jsonObject, user : req.user , totalreadconsultstatus : finalstatusconsult,});

      });


	});

  });       

	app.get('/symptom-admin', isLoggedIn, function(req, res) {
		var Symptom       = require('../app/models/symptoms');
		var User       = require('../app/models/user');

         var i = 0;
		var vm = this;
		vm.users = null;
        vm.allusers = [];
        vm.symptoms = null;
        vm.allsymptoms = [];


		User.find(function (err, users) {
  		// docs is an array
  		  for(var i = 0; i < users.length; i++){
            vm.allusers[i] = users[i];
       }
       var productvalueusers = JSON.stringify(users);
        var jsonObjectusers = JSON.parse(productvalueusers);

       console.log(jsonObjectusers);

      Symptom.find(function (err, symptoms) {
  		// docs is an array
  		  for(var i = 0; i < symptoms.length; i++){
            vm.allsymptoms[i] = symptoms[i];
       }
       var productvalue = JSON.stringify(symptoms);
        var jsonObject = JSON.parse(productvalue);

      // console.log(jsonObject);

   
      res.render('symptom-admin.ejs', {data: jsonObject, datauser: jsonObjectusers, user : req.user});

      });


	});

	 });	

  app.get('/symptom-all', isLoggedIn, function(req, res) {
    var Symptom       = require('../app/models/symptoms');
    var User       = require('../app/models/user');
       var i = 0;
   var vm = this;
        vm.order = null;
        vm.allorders = [];
       
        vm.users = null;
        vm.allusers = [];
        vm.symptoms = null;
        vm.allsymptoms = [];
         var a = 0;
        vm.consult = null;
        vm.allconsults = [];


      var Consult       = require('../app/models/consults');
   
       Consult.find(function (err, consult) {
        // docs is an array
          for(var a = 0; a < consult.length; a++){
              vm.allconsults[a] = consult[a];
          }
   
         var productvalueconsult = JSON.stringify(consult);
         var jsonObjectconsult = JSON.parse(productvalueconsult);
   

    

    User.find(function (err, users) {
      // docs is an array
        for(var i = 0; i < users.length; i++){
            vm.allusers[i] = users[i];
       }
       var productvalueusers = JSON.stringify(users);
        var jsonObjectusers = JSON.parse(productvalueusers);

       console.log(jsonObjectusers);

      Symptom.find(function (err, symptoms) {
      // docs is an array
        for(var i = 0; i < symptoms.length; i++){
            vm.allsymptoms[i] = symptoms[i];
       }
       var productvalue = JSON.stringify(symptoms);
        var jsonObject = JSON.parse(productvalue);

      // console.log(jsonObject);

   
      res.render('symptom-all.ejs', {data: jsonObject, datauser: jsonObjectusers, loadconsultdata: jsonObjectconsult, user : req.user});

      });


  });

   });  

   });       

	app.get('/symptom-detail', isLoggedIn, function(req, res) {
		var Symptom       = require('../app/models/symptoms');
		var User       = require('../app/models/user');

         var i = 0;
		var vm = this;
		vm.users = null;
        vm.allusers = [];
        vm.symptoms = null;
        vm.allsymptoms = [];
          var a = 0;
        vm.consult = null;
        vm.allconsults = [];


      var Consult       = require('../app/models/consults');
   
       Consult.find(function (err, consult) {
        // docs is an array
          for(var a = 0; a < consult.length; a++){
              vm.allconsults[a] = consult[a];
          }
   
         var productvalueconsult = JSON.stringify(consult);
         var jsonObjectconsult = JSON.parse(productvalueconsult);
   


		User.find(function (err, users) {
  		// docs is an array
  		  for(var i = 0; i < users.length; i++){
            vm.allusers[i] = users[i];
       }
       var productvalueusers = JSON.stringify(users);
        var jsonObjectusers = JSON.parse(productvalueusers);

       console.log(jsonObjectusers);

      Symptom.find(function (err, symptoms) {
  		// docs is an array
  		  for(var i = 0; i < symptoms.length; i++){
            vm.allsymptoms[i] = symptoms[i];
       }
       var productvalue = JSON.stringify(symptoms);
        var jsonObject = JSON.parse(productvalue);

      // console.log(jsonObject);

   
      res.render('symptom-detail.ejs', {data: jsonObject, datauser: jsonObjectusers, loadconsultdata:jsonObjectconsult , user : req.user});

      });


	});

	 });

     });

	app.get('/product-list', isLoggedIn, function(req, res) {
		var Product       = require('../app/models/products');
		var User       = require('../app/models/user');

         var i = 0;
		var vm = this;
		vm.users = null;
        vm.allusers = [];
        vm.products = null;
        vm.allproducts = [];


		User.find(function (err, users) {
  		// docs is an array
  		  for(var i = 0; i < users.length; i++){
            vm.allusers[i] = users[i];
       }
       var productvalueusers = JSON.stringify(users);
        var jsonObjectusers = JSON.parse(productvalueusers);

       console.log(jsonObjectusers);

      Product.find(function (err, products) {
  		// docs is an array
  		  for(var i = 0; i < products.length; i++){
            vm.allproducts[i] = products[i];
       }
       var productvalue = JSON.stringify(products);
        var jsonObject = JSON.parse(productvalue);

      // console.log(jsonObject);

   
      res.render('product-list.ejs', {data: jsonObject, datauser: jsonObjectusers, user : req.user});

      });


	});

 });

	app.get('/edit-product', isLoggedIn, function(req, res) {
		var Product       = require('../app/models/products');
		var User       = require('../app/models/user');

         var i = 0;
		var vm = this;
		vm.users = null;
        vm.allusers = [];
        vm.products = null;
        vm.allproducts = [];

        var productid = req.query.id;


		User.find(function (err, users) {
  		// docs is an array
  		  for(var i = 0; i < users.length; i++){
            vm.allusers[i] = users[i];
       }
       var productvalueusers = JSON.stringify(users);
        var jsonObjectusers = JSON.parse(productvalueusers);

      // console.log(jsonObjectusers);

      Product.find(function (err, products) {
  		// docs is an array
  		  for(var i = 0; i < products.length; i++){
            vm.allproducts[i] = products[i];
       }
       var productvalue = JSON.stringify(products);
        var jsonObject = JSON.parse(productvalue);

      // console.log(jsonObject);

   
      res.render('edit-product.ejs', {data: jsonObject, datauser: jsonObjectusers, user : req.user, productid : req.query.id});

      });


	});

	 });


   

	app.get('/deleteproduct',isLoggedIn, function(req, res) {
	   var Product       = require('../app/models/products');
       Product.remove({_id : req.query.id}, function (err, products) {
         console.log(products);    
		return res.redirect('product-list');
      });
	});

  app.post('/notification-query-update', isLoggedIn, function(req, res) {
    var Consultreplys = require('../app/models/consultreply');
    var Consult       = require('../app/models/consults');
    var base64 = require('base-64');
    var set = {query : base64.encode(req.body.query) };
    var _id = req.body.consultreply_id;
    console.log(_id);
    Consultreplys.update(
         { _id: _id },
         { $set: set },
         function (err, docs) {
                var set = {read_status: "1"};

                var _id= req.body.current_id;

                Consult.update(
                            { _id: _id },
                            { $set: set },
                            function (err, doc) {

                              console.log(doc);

                            });

                           console.log(docs);

      return res.redirect('list-consult-reply?id='+_id);
                       

            });


      });

	app.post('/product-insert', isLoggedIn, function(req, res) {
		var Product       = require('../app/models/products');
		var User       = require('../app/models/user');
		var dates=  new Date();
        var strDate = (dates.getMonth()+1)+ "-" + dates.getDate() + "-" + dates.getFullYear();

        var set = {
	          productname: req.body.productname,
	          productname_chineese:req.body.productname_chineese,
	          productprice: req.body.productprice,
	          productdescr: req.body.productdescr,
	          productfulldescr: req.body.productfulldescr,
	          productcategory: req.body.productcategory,
	          prosize:req.body.prosize,
	          addInfo:req.body.addInfo,
	          producttype: req.body.producttype,
	          datetime: dates
       
        };

          var products = new Product(set);
          products.save(set,
            function (err, doc) {
            	console.log(doc);
            });
        
      return res.redirect('product-list');

      });

	app.get('/product', isLoggedIn, function(req, res) {
		var Product       = require('../app/models/products');
		var User       = require('../app/models/user');

        res.render('product.ejs', {
			user : req.user 
		 });

      });


	app.get('/add-symptoms', isLoggedIn, function(req, res) {
		var Product       = require('../app/models/products');
		var User       = require('../app/models/user');
		var Symptom       = require('../app/models/symptoms');
        var i = 0;
		var vm = this;
        vm.products = null;
        vm.allproducts = [];
        
        Product.find(function (err, products) {
  		// docs is an array
  		  for(var i = 0; i < products.length; i++){
            vm.allproducts[i] = products[i];
       }
       var productvalue = JSON.stringify(products);
        var jsonObject = JSON.parse(productvalue);

        //console.log(jsonObject);
     
      res.render('add-symptoms.ejs', {
			user : req.user , data: jsonObject
		});

      });

     });   

	app.get('/deletesymptom',isLoggedIn, function(req, res) {
	  var Addsymptoms       = require('../app/models/addsymptom');
	  var Addsymptomsfemales       = require('../app/models/addsymptomfemale');  
       Addsymptoms.remove({_id : req.query.id}, function (err, addsymptoms) {
         console.log(addsymptoms);    
      });
        Addsymptomsfemales.remove({_id : req.query.id}, function (err, addsymptomsfemales) {
         console.log(addsymptomsfemales);   		
      });
        return res.redirect('manage-symptoms');
	});

	app.get('/edit-symptommale', isLoggedIn, function(req, res) {
		
		var Product       = require('../app/models/products');
		var User       = require('../app/models/user');
		var Symptom       = require('../app/models/symptoms');
		var Addsymptoms       = require('../app/models/addsymptom');
		var Addsymptomsfemales       = require('../app/models/addsymptomfemale');   
        var i = 0;
        var j = 0;
        var k = 0;
		var vm = this;
        vm.products = null;
        vm.allproducts = [];
        vm.addsymptom = null;
        vm.alladdsymptom = [];
        vm.addsymptomfemale = null;
        vm.alladdsymptomfemale = [];
        var _id = req.query.id;
        Addsymptoms.find({_id : req.query.id},function (err, addsymptom) {
  		// docs is an array
  		  for(var j = 0; j < addsymptom.length; j++){
            vm.alladdsymptom[j] = addsymptom[j];
       }
       var productvalueaddsymptom = JSON.stringify(addsymptom);
        var jsonObjectaddsymptom = JSON.parse(productvalueaddsymptom);

        //console.log(jsonObject);

        Addsymptomsfemales.find({_id : req.query.id}, function (err, addsymptomfemale) {
  		// docs is an array
  		  for(var k = 0; k < addsymptomfemale.length; k++){
            vm.alladdsymptomfemale[k] = addsymptomfemale[k];
       }
       var productvalueaddsymptomfemale = JSON.stringify(addsymptomfemale);
        var jsonObjectaddsymptomfemale = JSON.parse(productvalueaddsymptomfemale);

        Product.find(function (err, products) {
  		// docs is an array
  		  for(var i = 0; i < products.length; i++){
            vm.allproducts[i] = products[i];
       }
       var productvalue = JSON.stringify(products);
        var jsonObject = JSON.parse(productvalue);
     
      res.render('edit-symptommale.ejs', {
			user : req.user , data: jsonObject , dataaddsymptom : jsonObjectaddsymptom , dataaddsymptomfemale :jsonObjectaddsymptomfemale , symptomid : req.query.id
		});

      });

     });   
   
    });

  });

	app.get('/edit-symptomfemale', isLoggedIn, function(req, res) {
		
		var Product       = require('../app/models/products');
		var User       = require('../app/models/user');
		var Symptom       = require('../app/models/symptoms');
		var Addsymptoms       = require('../app/models/addsymptom');
		var Addsymptomsfemales       = require('../app/models/addsymptomfemale');   
        var i = 0;
        var j = 0;
        var k = 0;
		var vm = this;
        vm.products = null;
        vm.allproducts = [];
        vm.addsymptom = null;
        vm.alladdsymptom = [];
        vm.addsymptomfemale = null;
        vm.alladdsymptomfemale = [];
        var _id = req.query.id;
        Addsymptoms.find({_id : req.query.id},function (err, addsymptom) {
  		// docs is an array
  		  for(var j = 0; j < addsymptom.length; j++){
            vm.alladdsymptom[j] = addsymptom[j];
       }
       var productvalueaddsymptom = JSON.stringify(addsymptom);
        var jsonObjectaddsymptom = JSON.parse(productvalueaddsymptom);

        //console.log(jsonObject);

        Addsymptomsfemales.find({_id : req.query.id}, function (err, addsymptomfemale) {
  		// docs is an array
  		  for(var k = 0; k < addsymptomfemale.length; k++){
            vm.alladdsymptomfemale[k] = addsymptomfemale[k];
       }
       var productvalueaddsymptomfemale = JSON.stringify(addsymptomfemale);
        var jsonObjectaddsymptomfemale = JSON.parse(productvalueaddsymptomfemale);

        Product.find(function (err, products) {
  		// docs is an array
  		  for(var i = 0; i < products.length; i++){
            vm.allproducts[i] = products[i];
       }
       var productvalue = JSON.stringify(products);
        var jsonObject = JSON.parse(productvalue);
     
      res.render('edit-symptomfemale.ejs', {
			user : req.user , data: jsonObject , dataaddsymptom : jsonObjectaddsymptom , dataaddsymptomfemale :jsonObjectaddsymptomfemale , symptomid : req.query.id
		});

      });

     });   
   
    });

  });

  app.get('/manage-symptoms', isLoggedIn, function(req, res) {
		var Product       = require('../app/models/products');
		var User       = require('../app/models/user');
		var Symptom       = require('../app/models/symptoms');
		var Addsymptoms       = require('../app/models/addsymptom');
		var Addsymptomsfemales       = require('../app/models/addsymptomfemale');   
        var i = 0;
        var j = 0;
        var k = 0;
		var vm = this;
        vm.products = null;
        vm.allproducts = [];
        vm.addsymptom = null;
        vm.alladdsymptom = [];
        vm.addsymptomfemale = null;
        vm.alladdsymptomfemale = [];
        
        Addsymptoms.find(function (err, addsymptom) {
  		// docs is an array
  		  for(var j = 0; j < addsymptom.length; j++){
            vm.alladdsymptom[j] = addsymptom[j];
       }
       var productvalueaddsymptom = JSON.stringify(addsymptom);
        var jsonObjectaddsymptom = JSON.parse(productvalueaddsymptom);

        //console.log(jsonObject);

        Addsymptomsfemales.find(function (err, addsymptomfemale) {
  		// docs is an array
  		  for(var k = 0; k < addsymptomfemale.length; k++){
            vm.alladdsymptomfemale[k] = addsymptomfemale[k];
       }
       var productvalueaddsymptomfemale = JSON.stringify(addsymptomfemale);
        var jsonObjectaddsymptomfemale = JSON.parse(productvalueaddsymptomfemale);

        Product.find(function (err, products) {
  		// docs is an array
  		  for(var i = 0; i < products.length; i++){
            vm.allproducts[i] = products[i];
       }
       var productvalue = JSON.stringify(products);
        var jsonObject = JSON.parse(productvalue);
     
      res.render('manage-symptoms.ejs', {
			user : req.user , data: jsonObject , dataaddsymptom : jsonObjectaddsymptom , dataaddsymptomfemale :jsonObjectaddsymptomfemale
		});

      });

     });   
   
    });

  });     

	app.post('/symptoms-insert', isLoggedIn, function(req, res) {
		//console.log(res);
		var Product       = require('../app/models/products');
		var User       = require('../app/models/user');
		var Addsymptoms       = require('../app/models/addsymptom');
		var Addsymptomsfemales       = require('../app/models/addsymptomfemale');   
		var i = 0;
		var vm = this;
        vm.products = null;
        vm.allproducts = [];
        
        Product.find(function (err, products) {
  		// docs is an array
  		  for(var i = 0; i < products.length; i++){
            vm.allproducts[i] = products[i];
       }
       var productvalue = JSON.stringify(products);
        var jsonObject = JSON.parse(productvalue);

        if (req.body.gender == 'male'){

        	var set = {
             gender : req.body.gender,
             bodypartname : req.body.bodypartname,
             affectedareaname : req.body.affectedareaname,
             symptomname :req.body.symptomname,
             symptomdescription :req.body.symptomdescription,
             medincinename : req.body.medincinename
            
            };

           var addsymptom = new Addsymptoms(set);
           addsymptom.save(set,
            function (err, doc) {
            	//console.log(doc);
            });

        }else{

        	var set = {
             gender : req.body.gender,
             bodypartfemale : req.body.bodypartfemale,
             affectedareafemale : req.body.affectedareafemale,
             symptomfemale :req.body.symptomfemale,
             symptomdescriptionfemale :req.body.symptomdescriptionfemale,
             medincinenamefemale : req.body.medincinenamefemale
            
            };

           var addsymptomfemale = new Addsymptomsfemales(set);
           addsymptomfemale.save(set,
            function (err, doc) {
            	//console.log(doc);
            });

        }

        
        
     return res.redirect('add-symptoms');

      });

   });   


	app.post('/symptoms-update', isLoggedIn, function(req, res) {
		//console.log(res);
		var Product       = require('../app/models/products');
		var User       = require('../app/models/user');
		var Addsymptoms       = require('../app/models/addsymptom');
		var Addsymptomsfemales       = require('../app/models/addsymptomfemale');   
   
        if (req.body.gender == 'male'){

        	var _id = req.body.symptomid;

        	//console.log(_id);

        	var set = {
             gender : req.body.gender,
             bodypartname : req.body.bodypartname,
             affectedareaname : req.body.affectedareaname,
             symptomname :req.body.symptomname,
             symptomdescription :req.body.symptomdescription,
             medincinename : req.body.medincinename
            
            };
				Addsymptoms.update(
		            { _id: _id },
		            { $set: set},

		            function (err, docs) {
		            //	console.log(err);
		              
		               //  console.log(docs);
		            });
         }else{

         	console.log("female");

         	var _id = req.body.symptomid;

        	var set = {
             gender : req.body.gender,
             bodypartfemale : req.body.bodypartfemale,
             affectedareafemale : req.body.affectedareafemale,
             symptomfemale :req.body.symptomfemale,
             symptomdescriptionfemale :req.body.symptomdescriptionfemale,
             medincinenamefemale : req.body.medincinenamefemale
            
            };

                Addsymptomsfemales.update(
		            { _id: req.body.symptomid},
		            { $set: set },
		            function (err, doc) {
		              
		                 //console.log(doc);
		            });

        }

        
        
     return res.redirect('manage-symptoms');

      });

	app.post('/symptoms-update', isLoggedIn, function(req, res) {
		//console.log(res);
		var Product       = require('../app/models/products');
		var User       = require('../app/models/user');
		var Addsymptoms       = require('../app/models/addsymptom');
		var Addsymptomsfemales       = require('../app/models/addsymptomfemale');   
		var i = 0;
		var vm = this;
        vm.products = null;
        vm.allproducts = [];
        
        Addsymptoms.find(function (err, addsymptom) {
  		// docs is an array
  		  for(var i = 0; i < addsymptom.length; i++){
            vm.alladdsymptom[i] = addsymptom[i];
       }
       var productvalue = JSON.stringify(addsymptom);
        var jsonObject = JSON.parse(productvalue);

        	//console.log(jsonObject);
        
       		//console.log(req.body.gender);

        if (req.body.gender == 'male'){

        	var _id = req.body.symptomid;

        	//console.log(_id);

        	//console.log(req.body.gender);

        	var set = {
             gender : req.body.gender,
             bodypartname : req.body.bodypartname,
             affectedareaname : req.body.affectedareaname,
             symptomname :req.body.symptomname,
             symptomdescription :req.body.symptomdescription,
             medincinename : req.body.medincinename
            
            };

            Addsymptoms.findById(_id, function (err, addsymptom){
				Addsymptoms.update(
		            { _id: _id },
		            { $set: set},

		            function (err, docs) {
		              
		                // console.log(docs);
		            });
            });

         }else{

         	//console.log("female");

         	var _id = req.body.symptomid;

        	var set = {
             gender : req.body.gender,
             bodypartfemale : req.body.bodypartfemale,
             affectedareafemale : req.body.affectedareafemale,
             symptomfemale :req.body.symptomfemale,
             symptomdescriptionfemale :req.body.symptomdescriptionfemale,
             medincinenamefemale : req.body.medincinenamefemale
            
            };

            Addsymptomsfemales.findById(_id, function (err, addsymptomfemale){

                Addsymptomsfemales.update(
		            { _id: req.body.symptomid},
		            { $set: set },
		            function (err, doc) {
		              
		                // console.log(doc);
		            });
           });     
        }

        
        
     return res.redirect('manage-symptoms');

      });

   });   



	app.post('/updateproduct', isLoggedIn, function(req, res) {

		var Product       = require('../app/models/products');
		var dates=  new Date();
        var strDate = (dates.getMonth()+1)+ "-" + dates.getDate() + "-" + dates.getFullYear();

		var _id = req.body._id;
		console.log(_id);
		 var i = 0;
		var vm = this;
        vm.products = null;
        vm.allproducts = [];
		Product.find(function (err, products) {
  		// docs is an array
  		  for(var i = 0; i < products.length; i++){
            vm.allproducts[i] = products[i];
       }
        var productvalue = JSON.stringify(products);
        var jsonObject = JSON.parse(productvalue);

         Product.findById(_id, function (err, product) {
			        
			  //      console.log(user._id);

			          Product.update(
			            { _id: _id },
			            { $set: { 
			              productname: req.body.productname,
				          productname_chineese:req.body.productname_chineese,
				          productprice: req.body.productprice,
				          productdescr: req.body.productdescr,
				          productfulldescr: req.body.productfulldescr,
				          productcategory: req.body.productcategory,
				          prosize:req.body.prosize,
				          addInfo:req.body.addInfo,
				          producttype: req.body.producttype,
				          datetime: dates} 
					     },
			            function (err, doc) {
			               console.log(doc);        
			            });  

			    });

		 return res.redirect('product-list');
	});

	});	


	app.post('/updateorder', isLoggedIn, function(req, res) {

		var i = 0;
		var vm = this;
        vm.order = null;
        vm.allorders = [];

		var Order       = require('../app/models/orders');
		var _id = req.body.orderid;
		//console.log(_id);

	    var set = {orderstatus : req.body.o_status};

	    //console.log(set);

	       Order.update(
	        { _id: _id },
	        { $set: set },
	        function (err, doc) {
	          
	             console.log(doc);
	        });


        return res.redirect('list-orderitem?order_id=' + req.body.orderid);

      });

	app.get('/deleteorder',isLoggedIn, function(req, res) {
	   var Order       = require('../app/models/orders');
       Order.remove({_id : req.query.order_id}, function (err, orders) {
         console.log(orders);    
		return res.redirect('manageorder');
      });
	});

	app.get('/refund',isLoggedIn, function(req, res) {
			//	console.log(req.query.order_id);
		var Order       = require('../app/models/orders');
		var Orderitem       = require('../app/models/orderitem');
		var Transactions       = require('../app/models/transaction');


	    var i = 0;
	    var j = 0;
		var vm = this;
        vm.order = null;
        vm.allorders = [];
        vm.transaction = null;
        vm.alltransactions = [];
        Transactions.find(function (err, transaction) {
  		// docs is an array
  		  for(var i = 0; i < transaction.length; i++){
            vm.allorders[i] = transaction[i];


        }
 
       var productvaluestransaction = JSON.stringify(transaction);
       var jsonObjectstransaction = JSON.parse(productvaluestransaction);

        Order.find(function (err, order) {
  		// docs is an array
  		  for(var i = 0; i < order.length; i++){
            vm.allorders[i] = order[i];


        }
 
       var productvalues = JSON.stringify(order);
       var jsonObjects = JSON.parse(productvalues);
       Orderitem.find({orderid : req.query.order_id}, function (err, orderitem) {
       var productvalue = JSON.stringify(orderitem);
       var jsonObject = JSON.parse(productvalue);

        console.log(jsonObject);

       // console.log(jsonObject[0].productname);

   
      res.render('refund.ejs', {data: jsonObject, datas: jsonObjects, datatransaction: jsonObjectstransaction, user : req.user , orderid : req.query.order_id});

      });


     });

	});

    });    

    app.post('/refundreturn',isLoggedIn, function(req, res) {
				//console.log(res);
		var Order       = require('../app/models/orders');
		var Orderitem       = require('../app/models/orderitem');
		var Transactions       = require('../app/models/transaction');
		var Refund       = require('../app/models/refunds');

		var orderid = req.body.orderid;
		var _id = req.body._id;
		var userid = req.body.userid;
		var chargeId = req.body.paymentId;

		var stripe = require("stripe")("sk_test_beRNx3hBDckaj2C0eLZYgrqP");

		var token = req.body.stripeToken; 
		var email = req.body.stripeEmail;


		var refund = stripe.refunds.create({
		  charge: chargeId,
		}, function(err, refund) {
		  // asynchronously called
		  console.log(refund);
		    var dates=  new Date();
		      var sets = {
		      	 refund_id: refund.id,
		      	 userid : userid,
		      	 orderid:orderid,
		      	 amount:refund.amount*0.01,
		      	 balance_transaction:refund.balance_transaction,
		      	 chargeId:refund.charge,
		      	 refundcreate:refund.created,
		      	 status:refund.status,
		      };
		      	var refunds = new Refund(sets);
		         refunds.save(sets,function (err, docs) {
		                    var subiidd = sets._id;
		         Transactions.update(
		         	{ _id: req.body._id },
		         	{ $set: {refundId:docs.refund_id,refundstataus:refund.status,} },
		            function (err, doc) {
		               console.log(doc);
		            });   
		                console.log(docs);
		            }); 
		});
		return res.redirect('managetransaction');

    });    

	app.get('/deletetransaction',isLoggedIn, function(req, res) {
	var Transactions       = require('../app/models/transaction');
       Transactions.remove({_id : req.query.transaction_id}, function (err, transaction) {
         console.log(transaction);    
		return res.redirect('managetransaction');
      });
	});

	app.get('/res-herbals', isLoggedIn, function(req, res) {

     var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];

    var Consult       = require('../app/models/consults');
        var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;
     
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }

          }

           console.log(readstatuscount);       

          var finalstatusconsult = readstatuscount ;
          console.log(finalstatusconsult);
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
     
        res.render('res-herbals.ejs', {loadconsultdata: jsonObject, user : req.user ,totalreadconsultstatus : finalstatusconsult,});

      });
	
	});





	app.get('/res-hplc', function(req, res) {
		res.render('res-hplc.ejs', {
		});
	});

	app.get('/res-hplcs', isLoggedIn, function(req, res) {
     var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];

    var Consult       = require('../app/models/consults');
        var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;
     
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }

          }

           console.log(readstatuscount);       

          var finalstatusconsult = readstatuscount ;
          console.log(finalstatusconsult);
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
     
        res.render('res-hplcs.ejs', {loadconsultdata: jsonObject, user : req.user ,totalreadconsultstatus : finalstatusconsult,});

      });
	});

	app.get('/res-organic', function(req, res) {
		res.render('res-organic.ejs', {
		});
	});

	app.get('/res-organics', isLoggedIn, function(req, res) {
      var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];

    var Consult       = require('../app/models/consults');
        var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;
     
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }

          }

           console.log(readstatuscount);       

          var finalstatusconsult = readstatuscount ;
          console.log(finalstatusconsult);
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
     
        res.render('res-organics.ejs', {loadconsultdata: jsonObject, user : req.user ,totalreadconsultstatus : finalstatusconsult,});

      });
	});

	app.get('/res-philosophy', function(req, res) {
		res.render('res-philosophy.ejs', {
		});
	});

	app.get('/res-philosophys', isLoggedIn, function(req, res) {
   var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];

    var Consult       = require('../app/models/consults');
        var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;
     
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }

          }

           console.log(readstatuscount);       

          var finalstatusconsult = readstatuscount ;
          console.log(finalstatusconsult);
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
     
        res.render('res-philosophys.ejs', {loadconsultdata: jsonObject, user : req.user ,totalreadconsultstatus : finalstatusconsult,});

      });
	});

	app.get('/peo-comprofile', function(req, res) {
		res.render('peo-comprofile.ejs', {
		});
	});

	app.get('/peo-comprofiles', isLoggedIn, function(req, res) {
    var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];

      var Consult       = require('../app/models/consults');

   
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];
          }
   
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
     
        res.render('peo-comprofiles.ejs', {loadconsultdata: jsonObject, user : req.user});

      });

	});

	app.get('/peo-fourgps', function(req, res) {
		res.render('peo-fourgps.ejs', {
		});
	});

	app.get('/peo-fourgpss', isLoggedIn, function(req, res) {
    var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];

      var Consult       = require('../app/models/consults');

   
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];
          }
   
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
     
        res.render('peo-fourgpss.ejs', {loadconsultdata: jsonObject, user : req.user});

      });
	});



	app.get('/consult-online', function(req, res) {

		res.render('consult-online.ejs', {
		});
	});

	app.get('/consult-onlines',isLoggedIn, function(req, res) {
		var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];

    var Consult       = require('../app/models/consults');
        var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;
     
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }

          }

           console.log(readstatuscount);       

          var finalstatusconsult = readstatuscount ;
          console.log(finalstatusconsult);
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
     
        res.render('consult-onlines.ejs', {loadconsultdata: jsonObject, user : req.user ,totalreadconsultstatus : finalstatusconsult,});

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


      var fs =  require('fs');
      var express = require('express');
      var multer = require('multer');
      var uploads = multer({ dest: 'public/uploads/consults/'});
	app.post('/consultonlinedata-insert', function(req, res) {
      var User       = require('../app/models/user');
      var file = 'public/uploads/consults/' + req.files.myimage.originalFilename;
      console.log(req.files.myimage.path);
      var dates=  new Date();
      var strDate = (dates.getMonth()+1)+ "-" + dates.getDate() + "-" + dates.getFullYear();
      var base64 = require('base-64');
      fs.rename(req.files.myimage.path, file, function(err) {
        if (err) {
          console.log(file);
          //console.log(err);
          res.send(500);
        } else {
          var imageName = req.files.myimage.originalFilename;
          var imagepath = {};
          imagepath['originalname'] = imageName;
          var setencode = {    
               user_id : req.user._id,
               problem: base64.encode(req.body.problem),
               problemdetail: base64.encode(req.body.problemdetail),
               problemarea : base64.encode(req.body.problemarea),
               datetime : strDate,
               view_consult_status: "0",
               myimage: imagepath      
        };  

    // console.log(setencode);
    var Consult  = require('../app/models/consults');
    var consults = new Consult(setencode);
    consults.save(function(error, dataconsult){
          if(error){
              res.json(error);
              //console.log(error); 
          }
          else{
             // res.json(data);
           // console.log(dataconsult); 
        }
    });
  
  }
  
		return res.redirect('consult-onlines');
	});

  app.get('/review-consult', function (req, res) {
   res.sendFile( "public/uploads/consults/" + "/" + "review-consult" );
})

  });       


 //      var fss =  require('fs');
 //      var multer = require('multer');
 //      var uploads = multer({ dest: 'public/uploads/consults'});
 //  app.post('/consultimageupload', uploads.single('myimage'), function(req, res) {
 //      console.log(req);
 //      var file = 'public/uploads/consults' + req.files.myimage.originalFilename;
 //      console.log(req.files.myimage.path);
 //      fss.rename(req.files.myimage.path, file, function(err) {
 //        if (err) {
 //          console.log(err);
 //          res.send(500);
 //        } else {
 //         console.log("Image Uploaded Sucessfully"); 
 //  }
 // });

 //  });       

	app.get('/account',isLoggedIn, function(req, res) {
     var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];

    var Consult       = require('../app/models/consults');
        var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;
     
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }

          }

           console.log(readstatuscount);       

          var finalstatusconsult = readstatuscount ;
          console.log(finalstatusconsult);
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
     
        res.render('account.ejs', {loadconsultdata: jsonObject, user : req.user ,totalreadconsultstatus : finalstatusconsult,});

      });
	
	});

	app.post('/profile-update', isLoggedIn, function(req, res) {

		var User       = require('../app/models/user');
		var dates=  new Date();
        var strDate = (dates.getMonth()+1)+ "-" + dates.getDate() + "-" + dates.getFullYear();

		var _id = req.body.userid;
		console.log(_id);
      var a = 0;
      var vm = this ;
        vm.consult = null;
        vm.allconsults = [];
        var answerstatuscount = 0;
        var readstatuscount = 0;
        var totalreadconsultstatus = 0;


      var Consult       = require('../app/models/consults');
   
       Consult.find(function (err, consult) {
        // docs is an array
          for(var a = 0; a < consult.length; a++){
              vm.allconsults[a] = consult[a];
               if(req.user.user_role == 'user'){

                if(req.user._id == consult[a].user_id){

                      var totalreadstatusc = consult[a].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }
          }
          var finalstatusconsult = readstatuscount ;
   
         var productvalueconsult = JSON.stringify(consult);
         var jsonObjectconsult = JSON.parse(productvalueconsult);
   

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
			user : req.user , loadconsultdata : jsonObjectconsult, totalreadconsultstatus : finalstatusconsult,
		});
	});
 });      

	app.get('/edit-user', isLoggedIn, function(req, res) {

		var User       = require('../app/models/user');
		var dates=  new Date();
        var strDate = (dates.getMonth()+1)+ "-" + dates.getDate() + "-" + dates.getFullYear();

		var userid = req.query.id;
		//console.log(userid);

		var i = 0;
		var vm = this;
        vm.user = null;
        vm.allusers = [];

		var user_role = req.body.user_role;

		 User.find(function (err, user) {
  		// docs is an array
  		  for(var i = 0; i < user.length; i++){
            vm.allusers[i] = user[i];


        }
 
       var uservalue = JSON.stringify(user);
       var jsonObjectuser = JSON.parse(uservalue);

		res.render('edit-user.ejs', {
			user : req.user , data :jsonObjectuser , userid : req.query.id ,
		});
	});

	});	 

	app.post('/updateuser', isLoggedIn, function(req, res) {

		var User       = require('../app/models/user');
		var dates=  new Date();
        var strDate = (dates.getMonth()+1)+ "-" + dates.getDate() + "-" + dates.getFullYear();

		var _id = req.body.userid;
		console.log(_id);
		var i = 0;
		var vm = this;
		vm.user = null;
        vm.allusers = [];

	     User.find(function (err, user) {
  		// docs is an array
  		  for(var i = 0; i < user.length; i++){
            vm.allusers[i] = user[i];


        }
 
       var uservalue = JSON.stringify(user);
       var jsonObjectuser = JSON.parse(uservalue);


         User.findById({_id : req.body.userid}, function (err, user) {
			        
			     console.log(user);
			     console.log(_id);
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

		res.render('admin.ejs', {
			user : req.user , datauser : jsonObjectuser ,
		});
	});
   
   });


    var fs =  require('fs');
    var express = require('express');
    var multer = require('multer');
    var upload = multer({ dest: 'public/uploads'});
		app.post('/image-upload', upload.single('avatar'), function(req, res) {
      var _id = req.user._id;
     // console.log(_id);
      var file = 'public/uploads/' + req.files.avatar.originalFilename;
        var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];
    var User       = require('../app/models/user');
    var Consult       = require('../app/models/consults');
        var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;
     
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }

          }

         //  console.log(readstatuscount);       

          var finalstatusconsult = readstatuscount ;
        //  console.log(finalstatusconsult);
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
      fs.rename(req.files.avatar.path, file, function(err) {
        if (err) {
          console.log(err);
          res.send(500);
        } else {
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

      //  res.render('account.ejs', {
      //   loadconsultdata: jsonObject, user : req.user ,totalreadconsultstatus : finalstatusconsult,
      // });

      


      });


        }

      });
   

   app.get('/account', function (req, res) {
   // console.log("logggg");
   res.sendFile( "public/uploads/" + "/" + "account" );
});

		// res.render('account.ejs', {
		// 	loadconsultdata: jsonObject, user : req.user ,totalreadconsultstatus : finalstatusconsult,
		// });

          return res.redirect("account");

	});

	
   });


	app.get('/about-worldex', function(req, res) {
		res.render('about-worldex.ejs', {
		});
	});


  app.get('/about-worldexs',isLoggedIn, function(req, res) {
      var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];

    var Consult       = require('../app/models/consults');
        var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;
     
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }

          }

           console.log(readstatuscount);       

          var finalstatusconsult = readstatuscount ;
          console.log(finalstatusconsult);
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
     
        res.render('about-worldexs.ejs', {loadconsultdata: jsonObject, user : req.user ,totalreadconsultstatus : finalstatusconsult,});

      });
  
  });


	app.get('/subscription',isLoggedIn, function(req, res) {
      var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];

    var Consult       = require('../app/models/consults');
        var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;
     
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }

          }

           console.log(readstatuscount);       

          var finalstatusconsult = readstatuscount ;
          console.log(finalstatusconsult);
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
     
        res.render('subscription.ejs', {loadconsultdata: jsonObject, user : req.user ,totalreadconsultstatus : finalstatusconsult,});

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

  app.get('/download-apps',isLoggedIn, function(req, res) {
    var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];

    var Consult       = require('../app/models/consults');
        var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;
     
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }

          }

           console.log(readstatuscount);       

          var finalstatusconsult = readstatuscount ;
          console.log(finalstatusconsult);
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
     
        res.render('download-apps.ejs', {loadconsultdata: jsonObject, user : req.user ,totalreadconsultstatus : finalstatusconsult,});

      });
    
  });


	app.get('/checkout', function(req, res) {
		res.render('checkout.ejs', {
		});
	});

	app.get('/checkouts', function(req, res) {
	
     var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];

    var Consult       = require('../app/models/consults');
        var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;
     
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }

          }

           console.log(readstatuscount);       

          var finalstatusconsult = readstatuscount ;
          console.log(finalstatusconsult);
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
     
        res.render('checkouts.ejs', {loadconsultdata: jsonObject, user : req.user ,totalreadconsultstatus : finalstatusconsult,});

      });
    
	});

	app.get('/thankyou', function(req, res) {
		res.render('thankyou.ejs', {
		});
	
	});

	app.get('/paypal_thankyou',isLoggedIn, function(req, res) {
   var i = 0;
       var vm = this;
        vm.consult = null;
        vm.allconsults = [];

    var Consult       = require('../app/models/consults');
        var readstatuscount = 0; 
        var answerstatuscount = 0;  
        var totalreadconsultstatus = 0 ;
     
       Consult.find(function (err, consult) {
        // docs is an array
          for(var i = 0; i < consult.length; i++){
              vm.allconsults[i] = consult[i];

              if(req.user.user_role == 'user'){

                if(req.user._id == consult[i].user_id){

                      var totalreadstatusc = consult[i].read_status;

                      //console.log(totalreadstatusc);

                      if(totalreadstatusc != '1')
                         {
                        readstatuscount += 1;

                      
                         }
                    }


              }

          }

           console.log(readstatuscount);       

          var finalstatusconsult = readstatuscount ;
          console.log(finalstatusconsult);
         var productvalue = JSON.stringify(consult);
         var jsonObject = JSON.parse(productvalue);
     
        res.render('paypal_thankyou.ejs', {loadconsultdata: jsonObject, user : req.user ,totalreadconsultstatus : finalstatusconsult,});

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