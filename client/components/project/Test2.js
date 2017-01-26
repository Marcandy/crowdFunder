import React, { Component } from 'react';
import {connect } from 'react-redux';
import { updateProject } from '../../actions/projectActions';

import { Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon } from 'reactstrap';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:''
    }
  };
  handleSubmit() {
    this.props.updateProject({
      email:this.state.email,
      name:this.state.name
    })
  };

handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  };

  render() {
    return (
<Form>
  <FormGroup>
          <Label for="exampleEmail">Location</Label>
          <Input type="text" name="location" id="exampleEmail" placeholder="title" onChange={this.handleChange.bind(this)}/>

</FormGroup>
<FormGroup>
          <Label for="exampleNumber">Number</Label>
          <Input type="number" name="funding_duration" id="exampleNumber" placeholder="number placeholder" />
        </FormGroup>
  <FormGroup>
            <Label for="exampleEmail">goal</Label>
              <InputGroup>
          <InputGroupAddon>$</InputGroupAddon>
          <Input  name=goal placeholder="Amount" type="number" step="1" />
          <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>
  </FormGroup>

<FormGroup>
  <Label for="exampleText">Description</Label>
  <Input type="textarea" name="description" id="exampleText" />
</FormGroup>
<FormGroup>
  <Label for="exampleFile">Image</Label>
  <Input type="file" name="image" id="exampleFile" />
  <FormText color="muted">
    This is some placeholder block-level help text for the above input.
    It's a bit lighter and easily wraps to a new line.
  </FormText>
</FormGroup>
<FormGroup>
  <Label for="exampleText">Text Area</Label>
  <Input type="textarea" name="text" id="exampleText" />
</FormGroup>


<Button onClick={this.handleSubmit.bind(this)}>Submit</Button>

</Form>
)
}

// goal duration
// <FormGroup tag="fieldset">
//   <legend>Radio Buttons</legend>
//   <FormGroup check>
//     <Label check>
//       <Input type="radio" name="radio1" />{' '}
//       Option one is this and that—be sure to include why it's great
//     </Label>
//   </FormGroup>
//   <FormGroup check>
//     <Label check>
//       <Input type="radio" name="radio1" />{' '}
//       Option two can be something else and selecting it will deselect option one
//     </Label>
//   </FormGroup>
// </FormGroup>
// <FormGroup check>
//   <Label check>
//     <Input type="checkbox" />{' '}
//     Check me out
//   </Label>
// </FormGroup>
