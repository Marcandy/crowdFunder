import React, {Component} from 'react';
import {connect} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export default class StripeView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0
        }
        // this.charge = axios.post()
        this.self = this;
        this.onToken = this.onToken.bind(this);
    }
    // JSON.stringify(token)

    onToken(token) {

      token.amount = this.state.amount;
      // token.amount = this.state.amount;
        axios.post('/api/charge', token ).then( () => {
            alert(`We are in business :)`);
        });
    }
    render() {
        var inp = (
            <input type="text"></input>
        );
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
         <div >
        <StripeCheckout
          amount={this.state.amount * 100}
          token={this.onToken} stripeKey="pk_test_J3VU4fHBt40EOdPjkWytAG2W">
            <button className="btn btn-primary">
                Back this project

            </button>

        </StripeCheckout>
        <input onChange = {
            e => {
                e.preventDefault();
                this.setState({

                    amount: Number(e.target.value)
                })
            }
        }
        placeholder = "amount"/>
    </div>)
    }
}
