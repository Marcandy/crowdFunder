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
              <li><Link to="/project/test2">Story</Link></li>
            </ul>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/project">Cover</Link></li>
            </ul>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/project">Finish</Link></li>
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}
