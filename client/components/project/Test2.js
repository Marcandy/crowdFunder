import React, { Component } from 'react';
import {connect } from 'react-redux';
import { updateProject } from '../../actions/projectActions';
import { saveProject } from '../../actions/projectActions';
import {  browserHistory } from "react-router";

import { Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon } from 'reactstrap';


class Test2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location:'',
      funding_duration:'',
      goal:'',
      description:'',
      image:'',
      risks_challenges: ''
    }
  };
  handleSubmit(e) {
    e.preventDefault();
    this.props.updateProject({
      location:this.state.location,
      funding_duration:this.state.funding_duration,
      goal:this.state.goal,
      description:this.state.description,
      image:this.state.image,
      risks_challenges:this.state.risks_challenges,
    })

    browserHistory.push('/project/finish')
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
          <Label for="exampleNumber">Funding Duration</Label>
          <Input type="number" name="funding_duration" id="exampleNumber" placeholder="number placeholder"
            onChange={this.handleChange.bind(this)}
            />
        </FormGroup>
  <FormGroup>
            <Label for="exampleEmail">goal</Label>
    <InputGroup>
          <InputGroupAddon>$</InputGroupAddon>
          <Input  name='goal' placeholder="Amount" type="number" step="1"
          onChange={this.handleChange.bind(this)}
            />
          <InputGroupAddon>.00</InputGroupAddon>
    </InputGroup>
  </FormGroup>

<FormGroup>
  <Label for="exampleText">Description</Label>
  <Input type="textarea" name="description" id="exampleText" onChange={this.handleChange.bind(this)}/>
</FormGroup>

<FormGroup>
  <Label for="exampleFile">Image</Label>
  <Input type="file" name="image" id="exampleFile" onChange={this.handleChange.bind(this)}/>
  <FormText color="muted">
    This is some placeholder block-level help text for the above input.
    It's a bit lighter and easily wraps to a new line.
  </FormText>
</FormGroup>

<FormGroup>
  <Label for="exampleText">Risks Challenges</Label>
  <Input type="textarea" name="risks_challenges" id="exampleText"
    onChange={this.handleChange.bind(this)}
    />
</FormGroup>


<Button onClick={this.handleSubmit.bind(this)}>Submit</Button>

</Form>
)
}

}

function mapStateToProps(state){
    return {

      location:state.project.location,
      funding_duration:state.project.funding_duration,
      goal:state.project.goal,
      description:state.project.description,
      image:state.project.image,
      risks_challenges:state.project.risks_challenges
      }
}


const mapDispatchToActionCreator = {
  updateProject
}

export default connect(mapStateToProps, mapDispatchToActionCreator) (Test2)

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
