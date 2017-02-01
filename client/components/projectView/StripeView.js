import React, { Component } from 'react';
import {connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export default class StripeView extends React.Component {
  constructor(props) {
    super(props)

    // this.charge = axios.post()
  }
  onToken(token) {
  axios.post('/api/charge', {
    method: 'POST',
    body: JSON.stringify(token),
  }).then(token => {
    alert(`We are in business, ${token.email}`);
  });
}
  render() {

    return (
      // <form action="/your-server-side-code" method="POST">
      //   <script
      //     src="https://checkout.stripe.com/checkout.js" className="stripe-button"
      //     data-key="pk_test_J3VU4fHBt40EOdPjkWytAG2W"
      //     data-amount="2000"
      //     data-name="Demo Site"
      //     data-description="2 widgets"
      //     data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
      //     data-locale="auto">
      //   </script>
      // </form>

      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_J3VU4fHBt40EOdPjkWytAG2W"
      />
    )
  }
}
