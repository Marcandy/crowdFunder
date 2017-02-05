import React, { Component } from 'react';
import {connect} from 'react-redux';
import { updateProject, saveProject} from '../../actions/projectActions';
import { browserHistory } from 'react-router';

import {  Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon } from 'reactstrap';

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

  render() {
    return (

      <Form>
        <FormGroup>
          <Label for="exampleFile">Image</Label>
          <Input type="file" name="imageP" id="exampleFile" />
          <FormText color="muted">
            Upload Image
          </FormText>
        </FormGroup>

        <FormGroup>
                <Input type="text" name="image" id="exampleEmail" placeholder="image" onChange={this.handleChange.bind(this)}/>
        </FormGroup>

        <FormGroup>
                <Label for="exampleEmail">Video</Label>
                <Input type="text" name="video" id="exampleEmail" placeholder="video" onChange={this.handleChange.bind(this)}/>
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">About Us</Label>
          <Input type="textarea" name="about_us" id="exampleText"
            onChange={this.handleChange.bind(this)}
            />
        </FormGroup>


        <Button onClick={this.handleSubmit.bind(this)}>Next</Button>
      </Form>
    )
  }
}

export default connect(null, {updateProject}) (Media)
