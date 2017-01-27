import React, { Component } from 'react';
import {connect } from 'react-redux';
import { saveProject } from '../../actions/projectActions';
// import { saveProject } from '../../reducers/projectReducer';
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon } from 'reactstrap';

class Finish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:this.props.project.description,
      shortBlurb:this.props.project.shortBlurb,
      category: this.props.project.category,
      location:this.props.project.location,
      funding_duration:this.props.project.funding_duration,
      goal:this.props.project.goal,
      description:this.props.project.description,
      image:this.props.project.image,
      risks_challenges: this.props.project.risks_challenges,
      user_id: this.props.user.user_id
    }

  }



  handleSubmit(e) {
    // e.preventDefault();
    let baseUrl = 'http://localhost:3000/';

    // this.props.saveProject(this.state)
    // .then(function (res) {
    //   console.log(res);
    //   return this.obj= res.data
    // })
    console.log(this.props.user);

    //this.props.dispatch(//we need user id hen why we using state to comine objesct
       axios.post(`${baseUrl}api/project`, this.state)
       .then(response => {
          // this.props.updateProject
          console.log(response.data);
       })
    //)

    // this.props.saveProject(this.props.project).then(function (res) {
    //   console.log(res.data); // work but not best unecessary dispatch action
    // })
  };

  render() {
    return (
      <div>
        {this.props.project.description}
          <br/>
            <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
            <br/>
        <button onClick={this.handleSubmit.bind(this)}>Create</button>
          <br/>
          <div>{this.obj}</div>
      </div>

    )
  }
}

// function mapStateToProps(state){
//     return {
//       title:state.project.title,
//       shortBlurb:state.project.shortBlurb,
//       category:state.project.category
//
//       }
// }
//
// Finish.propTypes = {
//   saveProject:  React.PropTypes.func.isRequired
// }



// const mapDispatchToActionCreator = {
//   saveProject
// }


export default connect( state => ({project: state.project, user: state.user}), {saveProject} ) (Finish)
