import React from "react";
import { Link } from 'react-router';
import './project.scss'

export default class App extends React.Component {
  render() {
    return (
    <div className='form posFix'>
      <nav className="navbar navbar-default projMenu">
        <div className="container-fluid">

          <div className="navbar-header">
            <Link to="/projectNav/test" className="navbar-brand">Basic</Link>
          </div>

          <div className="navbar-header">
            <Link to="/projectNav/test2" className="navbar-brand">Story</Link>
          </div>

          <div className="navbar-header">
            <Link to="/projectNav/media" className="navbar-brand">Media</Link>
          </div>

          <div className="navbar-header">
            <Link to="/projectNav/test2" className="navbar-brand">Preview</Link>
          </div>

        </div>
      </nav>

    <div className='formContent'>
      {this.props.children}
    </div>
    </div>
    )
  }
}
