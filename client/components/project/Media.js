import React, { Component } from 'react';
import {connect} from 'react-redux';
import { updateProject, saveProject} from '../../actions/projectActions';
import { browserHistory } from 'react-router';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Media extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image:'',
      video: '',
      about_us: ''
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateProject({
      image:this.state.image,
      video:this.state.video,
      about_us:this.state.about_us,
    })

    browserHistory.push('/projectNav/finish')
  };

  handleChange(e){
      this.setState({[e.target.name]: e.target.value})
    };

  
}
