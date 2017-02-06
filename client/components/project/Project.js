import React, { Component } from 'react';
import ProjectForm from './ProjectForm';
import Test from './Test';
import ProjectNav from './ProjectNav';
import './project.scss';
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router';
const postImg = require('../../data/img/home.png');

export default class Project extends React.Component {
  // handleSubmit = function (values) {
  //   // Do something with the form values
  //   console.log(values);
  // }
  render() {
    return (
    <div className='proj posFix'>


      <Link to='projectNav'>
      <Button id='projB' size='huge' color='green'>
          Start Your Project
       </Button>
       </Link>
  <div className='projVid'>

    <video id="background-video" poster={postImg} loop autoPlay muted>
<source src="https://d3mlfyygrfdi2i.cloudfront.net/175c/startpage_20130916_supercut_hi.mp4" type="video/mp4" />
</video>


</div>



      <div >

    </div>
    </div>

    );
  }
}

// <iframe src="https://d3mlfyygrfdi2i.cloudfront.net/175c/startpage_20130916_supercut_hi.mp4" />
