import React from 'react';
import { Link } from 'react-router';
// import "materialize-css"

// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const bc = {
  color: "white"
}

export default () => {
  // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
  return (
    <MuiThemeProvider>
    <AppBar
    title={<Link to="/">crowdFunder</Link>}

    iconElementRight={
    <div>
      <Link to="/project">
        <IconButton
           iconClassName="material-icons"
           iconStyle={bc}
         >
           view_module

        </IconButton>
      </Link>

      <Link to="/test">
        <IconButton
           iconClassName="material-icons"
           iconStyle={bc}
         >
           view_module

        </IconButton>
      </Link>


      <Link to="/signup">
        <IconButton
           iconClassName="material-icons"
           iconStyle={bc}
         >
           account_circle
         </IconButton>
      </Link>

   </div>
    }
  />
</MuiThemeProvider>
// <nav>
//   <div className="nav-wrapper">
//     <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Logo</a>
//     <ul className="right hide-on-med-and-down">
//
//       <li><Link to="/"><i className="material-icons">view_module </i></Link></li>
//
//
//
//
//
//            <li><Link to="/signup"><i className="material-icons">vperson_pin </i></Link></li>
//
//
//
//
//     </ul>
//   </div>
// </nav>

    // <nav className="navbar navbar-default">
    //   <div className="container-fluid">
    //     <div className="navbar-header">
    //       <Link to="/" className="navbar-brand">crowdFunder</Link>
    //     </div>
    //
    //     <div className="collapse navbar-collapse">
    //       <ul className="nav navbar-nav navbar-right">
    //         <li><Link to="/signup">Sign up</Link></li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  )
}
