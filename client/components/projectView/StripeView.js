import React, {Component} from 'react';
import {connect} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

export default class StripeView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0,
            totalfund: this.props.project.totalfund
        }
        // this.charge = axios.post()
console.log( this.props.project, 'itestr');
        this.onToken = this.onToken.bind(this);
    }
    // JSON.stringify(token)

    onToken(token) {
      var sel = this;
      token.amount = this.state.amount;
      token.projId = this.props.project.projectid;
      // token.amount = this.state.amount;
        axios.post('/api/charge', token ).then( res => {
          console.log(res, this.props.project, 'irir');
          this.setState({totalfund: res.data[0].totalfund})

            console.log(this.state, res.data);
            // this.setState({totalFund: fund})

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
           <h2>Total: {this.state.totalfund} </h2>
           <h4>pledged of: {this.props.project.goal} goal</h4>

           <br/>


        <StripeCheckout
          amount={this.state.amount * 100}
          token={this.onToken} stripeKey="pk_test_J3VU4fHBt40EOdPjkWytAG2W">
            <Button size='huge' color='green'>
              Back This project
             </Button>




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
