var app = require('../../server.js');
var config = require('../../config.js');

var stripe = require('stripe')(config.stripe.testKey);

module.exports = {
  Charge: function(req, res,next) {
  // var  lol= JSON.parse(req.body);
  var amount = req.body.amount * 100;

console.log(req.body, 'hello' );
  // ensure amount === actual product amount to avoid fraud

  stripe.customers.create({
     email: req.body.email,
    source: req.body.id
  })
  .then(function (customer) {

    stripe.charges.create({
        amount,
         currency: "usd",
         customer: customer.id
          // source: 'sk_test_CYHG7Sg19uyLrHQxI0xk6gdH'
    })
  }).then(function(charge) {

        res.send('success');

    })
  // .then(function( charge) {
  //   // if (err) {
  //   //   console.log(err);
  //   //   res.send('error');
  //   // } else {
  //   console.log(charge);
  //         res.send('success');
  //
  // });

  }
}

// app.post("/charge", (req, res) => {
//   console.log(req.body);
//   let amount = 500;
//
//   stripe.customers.create({
//      email: req.body.stripeEmail,
//     source: req.body.stripeToken
//   })
//   .then(customer =>
//     stripe.charges.create({
//       amount,
//       description: "Sample Charge",
//          currency: "usd",
//          customer: customer.id
//     }))
//   .then(charge => res.render("charge.pug"));
// });


//--------------before
// module.exports = {
//   Charge: post('/charge', function(req, res,next) {
//   var stripeToken = req.body.stripeToken;
//   var amount = req.body.price * 100;
//
//   // ensure amount === actual product amount to avoid fraud
//
//   stripe.charges.create({
//     card: stripeToken,
//     currency: 'usd',
//     amount: amount
//   },
//   function(err, charge) {
//     if (err) {
//       console.log(err);
//       res.send('error');
//     } else {
//       res.send('success');
//     }
//   });
// });
// }
