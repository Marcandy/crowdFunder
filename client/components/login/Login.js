import React from 'react'
import Auth0Lock from 'auth0-lock'



export class Login extends React.Component {
  constructor(props) {
    super(props)

    this.lock = new Auth0Lock('OSNC8XIkAXANBQ7Z0kbVoMNsnUOy4NTg', 'marcandy.auth0.com',
     { auth: {
          redirectUrl: 'http://localhost:8080/callback'
        , responseType: 'code'
        , params: {
          scope: 'openid name email picture'
        }
      }});
  }

  render() {

    return (
      <div >
        <h2>Login</h2>

         {this.lock.show()}

      </div>
    )
  }
}

export default Login;
