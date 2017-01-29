import React from "react";
import Nav from './Nav';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

import FlashMessagesList from './flash/FlashMessagesList';

 class App extends React.Component {// main component that will Nav and subsequent component
                                    // which will be passed as children props
                                    // getChildContext() {
                                    //               return { muiTheme: getMuiTheme(baseTheme) };
                                    //           }

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

export default App;
