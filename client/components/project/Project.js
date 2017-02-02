import React, { Component } from 'react';
import ProjectForm from './ProjectForm';
import Test from './Test';
import ProjectNav from './ProjectNav';
import './project.scss';

export default class Project extends React.Component {
  // handleSubmit = function (values) {
  //   // Do something with the form values
  //   console.log(values);
  // }
  render() {
    return (
    <div className='proj'>
      <ProjectNav />

      <div className='form'>
      {this.props.children}
    </div>
    </div>

    );
  }
}
