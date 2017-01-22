import React from 'react';
// import TextField from 'material-ui/TextField';

import timezones from '../../data/timezones';
import map from 'lodash/map'; // inorder to map throguh arrays too
import axios from 'axios';

export default class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault(); // store the function on props which will make the request
    this.props.userSignupRequest(this.state)
  }

  render() {

    let options = map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign Up</h1>

          <div className="form-group">
            <label className="control-label">Username</label>
            <input
              value={this.state.username}
              onChange={this.onChange}
              type="text"
              name="username"
              className="form-control"
            />
          </div>

          <div className="form-group">
          <label className="control-label">Email</label>
          <input
            onChange={this.onChange}
            value={this.state.email}
            type="text"
            name="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            onChange={this.onChange}
            value={this.state.password}
            type="password"
            name="password"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password Confirmation</label>
          <input
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            type="password"
            name="passwordConfirmation"
            className="form-control"
          />
        </div>

        <div className="form-group">
            <label className="control-label">Timezone</label>
            <select
              className="form-control"
              name="timezone"
              onChange={this.onChange}
              value={this.state.timezone}
            >
              <option value="" disabled>Choose Your Timezone</option>
              {options}
            </select>
          </div>


          <div className="form-group">
            <button className="btn btn-primary btn-lg">
              Sign up
            </button>
          </div>
      </form>

    )
  }
}

 
