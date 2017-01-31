import React from "react";
import Nav from './Nav';
import { addUser } from '../actions/signupActions';
import { connect } from 'react-redux';
import axios from 'axios';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

import FlashMessagesList from './flash/FlashMessagesList';

 class App extends React.Component {
   // main component that will Nav and subsequent component
   // which will be passed as children props
   // getChildContext() {
   //return { muiTheme: getMuiTheme(baseTheme) };
   //           }
   constructor(props) {
     super(props)
     console.log(this.props.user, 'boom');
     let self =this;
     if(!this.props.user) {
       axios.get('/api/user').then(function ( res) {
         if (err) {
           console.log(err , res , 'both');
         }

         console.log( res, 'hello');
         self.props.addUser(res.data)
       })
     }
   }

  render() {
    return (

      // <MuiThemeProvider>
      //   <Nav />
      //   {this.props.children}
      // </MuiThemeProvider>

      //className="container"
      <div >
         <Nav />
         <FlashMessagesList />
        {this.props.children}
      </div>
    )
  }

}

// MyComponent.childContextTypes = {
//             muiTheme: React.PropTypes.object.isRequired,
//         };

export default connect( state => ({user: state.user}), {addUser} ) (App);
