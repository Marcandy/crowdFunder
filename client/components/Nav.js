import React from 'react';
import { Link } from 'react-router';
import './nav.scss';
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


import { Icon, Button, Dropdown, Menu } from 'semantic-ui-react';

export default class Nav extends React.Component {
  constructor(props) {
  super(props);

  this.state = { activeItem: 'home' }

  this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })
}
    render() {
      const { activeItem } = this.state

      return (
        <Menu  size='small' icon='labeled' id='menu'>

          <Menu.Item name='gamepad' active={activeItem === 'gamepad'} onClick={this.handleItemClick} >
        <Icon  name='edit' size='small' inverted color='green'/>
        crowdFunder
      </Menu.Item>

      <Menu.Item name='video camera' active={activeItem === 'video camera'} onClick={this.handleItemClick}>

        <Icon   name='edit' size='small'/>
        <Link to="/project">
        Project
        </Link>
      </Menu.Item>

      <Menu.Item name='video play' active={activeItem === 'video play'} onClick={this.handleItemClick}>
        <Icon name='video play' size='small' />
        <Link to="/viewContainer">
        Explore
      </Link>
      </Menu.Item>

          <Menu.Menu position='right'>
            <Dropdown item text='Language'>
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              <Link to="/signup">
              <Button  color='green'>Sign Up</Button></Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )
    }
}

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
