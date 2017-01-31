var app = require('../../server.js');
var config = require('../../config.js');

var stripe = require('stripe')(config.stripe.testKey);

module.exports = {
  Charge: function(req, res,next) {
  var stripeToken = req.body.stripeToken;
  var amount = req.body.price * 100;

  // ensure amount === actual product amount to avoid fraud

  stripe.charges.create({
    card: stripeToken,
    currency: 'usd',
    amount: amount
  },
  function(err, charge) {
    if (err) {
      console.log(err);
      res.send('error');
    } else {
      res.send('success');
    }
  });
}
}
