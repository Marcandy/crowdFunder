import React from "react";
import Nav from './Nav';

 class App extends React.Component {// main component that will Nav and subsequent component
                                    // which will be passed as children props
  render() {
    return (
      <div className="container">
        <Nav />
        {this.props.children}
      </div>
    )
  }

}

export default App;
