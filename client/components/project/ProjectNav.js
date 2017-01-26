import React from "react";
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/project/test" className="navbar-brand">Basic</Link>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signup">Story</Link></li>
            </ul>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signup">Cover</Link></li>
            </ul>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signup">Finish</Link></li>
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}
