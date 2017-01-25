import React, { Component } from 'react';
import ProjectForm from './ProjectForm';
import Test from './Test';
import ProjectNav from './projectNav';

export default class Project extends React.Component {
  // handleSubmit = function (values) {
  //   // Do something with the form values
  //   console.log(values);
  // }
  render() {
    return (
    <div>
      <ProjectNav />
      {this.props.children}

    </div>

    );
  }
}
