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


  <div className='projVid'>
    <video id="background-video" loop autoPlay>
<source src="https://d3mlfyygrfdi2i.cloudfront.net/175c/startpage_20130916_supercut_hi.mp4" type="video/mp4" />
</video>


</div>









      <div className='form'>
      {this.props.children}
    </div>
    </div>

    );
  }
}

// <iframe src="https://d3mlfyygrfdi2i.cloudfront.net/175c/startpage_20130916_supercut_hi.mp4" />
