import React from 'react';
import { Link } from 'react-router';
import './nav.scss';
import { connect } from 'react-redux';
// import "materialize-css"

// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//
// import AppBar from 'material-ui/AppBar';
// import IconButton from 'material-ui/IconButton';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
// import FlatButton from 'material-ui/FlatButton';
// import FontIcon from 'material-ui/FontIcon';

import {browserHistory } from 'react-router';
import { Icon, Button, Dropdown, Menu } from 'semantic-ui-react';

//

 class Nav extends React.Component {
  constructor(props) {
  super(props);

  this.state = { activeItem: 'home' }

  this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })
}
    render() {
      const { activeItem } = this.state

      return (
        <Menu  size='large' icon='labeled' id='menu'>





      <Link to="/project">
      <Menu.Item name='video camera' active={activeItem === 'video camera'} onClick={this.handleItemClick}>

        <Icon   name='edit' size='small'/>

        Project

      </Menu.Item>
</Link>


      <Menu.Item name='video play' active={activeItem === 'video play'} onClick={this.handleItemClick}>
        <Icon name='find' size='small' />

        <a href="http://localhost:8080/auth/me">Explore</a>



      </Menu.Item>

      <Menu.Item  className='title'>
<Link to="/" >
        <h1 ><span className='title1'>Crowd</span>Funder</h1>
        </Link>

      </Menu.Item>


          <Menu.Menu position='right'>
            <Dropdown item text='Categories'>
              <Dropdown.Menu>
                <Dropdown.Item>Featured</Dropdown.Item>
                <Dropdown.Item>Recent</Dropdown.Item>
                <Dropdown.Item>Oldest</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              <Link to="/login">
                </Link>
              {
                this.props.user ? (<Button  color='green'> <a href="http://localhost:8080/auth/logout">Logout</a></Button>)
                : (
                  <Button  color='green'> <a href="http://localhost:8080/auth/google">Sign Up</a></Button>) 

              }
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )
    }
}
export default  connect( state => ({user: state.user}), {} ) (Nav)
// title: <Menu.Item  name='gamepad' active={activeItem === 'gamepad'} onClick={this.handleItemClick} >
// <Icon  name='life ring' size='small' inverted
//  color='green'/>
// crowdFunder
// </Menu.Item>

// <Link to="/viewContainer"></Link>

      // Nav.childContextTypes = {
      //       muiTheme: React.PropTypes.object.isRequired,
      //   };

        // getChildContext() {
        //             return { muiTheme: getMuiTheme(baseTheme) };
        //         }
        //
        //
        //
        //         render() {
        //           const bc = {
        //             color: "white"
        //           }
        //
        //             return (
        //
        //                   <AppBar
        //                   title={<Link to="/">crowdFunder</Link>}
        //
        //                   iconElementRight={
        //                   <div>
        //                     <Link to="/project">
        //                       <IconButton
        //                          iconClassName="material-icons"
        //                          iconStyle={bc}
        //                        >
        //                         dashboard
        //                       </IconButton>
        //                     </Link>
        //
        //                     {/*<Link to="/test">
        //                       <IconButton
        //                          iconClassName="material-icons"
        //                          iconStyle={bc}
        //                        >
        //                          view_module
        //
        //                       </IconButton>
        //                     </Link>*/}
        //
        //
        //                     <Link to="/signup">
        //                       <IconButton
        //                          iconClassName="material-icons"
        //                          iconStyle={bc}
        //                        >
        //                          account_circle
        //                        </IconButton>
        //                     </Link>
        //
        //                  </div>
        //                   }
        //                 />
        //
        //
        //             );
        //         }

// export default () => {
//   // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
//   return (
//     <MuiThemeProvider>
//
// </MuiThemeProvider>
// // <nav>
// //   <div className="nav-wrapper">
// //     <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Logo</a>
// //     <ul className="right hide-on-med-and-down">
// //
// //       <li><Link to="/"><i className="material-icons">view_module </i></Link></li>
// //
// //
// //
// //
// //
// //            <li><Link to="/signup"><i className="material-icons">vperson_pin </i></Link></li>
// //
// //
// //
// //
// //     </ul>
// //   </div>
// // </nav>
//
//     // <nav className="navbar navbar-default">
//     //   <div className="container-fluid">
//     //     <div className="navbar-header">
//     //       <Link to="/" className="navbar-brand">crowdFunder</Link>
//     //     </div>
//     //
//     //     <div className="collapse navbar-collapse">
//     //       <ul className="nav navbar-nav navbar-right">
//     //         <li><Link to="/signup">Sign up</Link></li>
//     //       </ul>
//     //     </div>
//     //   </div>
//     // </nav>
//   )
// }
