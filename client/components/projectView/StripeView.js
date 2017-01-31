import React, { Component } from 'react';
import {connect } from 'react-redux';

export default class StripeView extends React.Component {
  constructor(props) {
    super(props)

    // this.charge = axios.post()
  }

  render() {
    return (
      <form action="/your-server-side-code" method="POST">
        <script
          src="https://checkout.stripe.com/checkout.js" className="stripe-button"
          data-key="pk_test_J3VU4fHBt40EOdPjkWytAG2W"
          data-amount="2000"
          data-name="Demo Site"
          data-description="2 widgets"
          data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
          data-locale="auto">
        </script>
      </form>
    )
  }
}
