import React from 'react';
// import TextField from 'material-ui/TextField';

export default class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <form>
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
            <button className="btn btn-primary btn-lg">
              Sign up
            </button>
          </div>
      </form>

    )
  }
}
