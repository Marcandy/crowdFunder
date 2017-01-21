import React from 'react';
import { Link } from 'react-router';
import "materialize-css"

// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import Appbar from 'material-ui/AppBar';


export default () => {
  return (

<nav>
  <div className="nav-wrapper">
    <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Logo</a>
    <ul className="right hide-on-med-and-down">

      <li><Link to="/"><i className="material-icons">view_module </i></Link></li>





           <li><Link to="/signup"><i className="material-icons">vperson_pin </i></Link></li>




    </ul>
  </div>
</nav>

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
