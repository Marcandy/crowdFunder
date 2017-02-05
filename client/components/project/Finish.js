import React, { Component } from 'react';
import {connect } from 'react-redux';
import { saveProject } from '../../actions/projectActions';
// import { saveProject } from '../../reducers/projectReducer';
import axios from 'axios';
import {browserHistory } from 'react-router';

import { Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon } from 'reactstrap';

class Finish extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title:this.props.project.title,
      shortblurb:this.props.project.shortblurb,
      category: this.props.project.category,
      location:this.props.project.location,
      funding_duration:this.props.project.funding_duration,
      goal:this.props.project.goal,
      image:this.props.project.image,
      video:this.props.project.video,
      description:this.props.project.description,
      risks_challenges: this.props.project.risks_challenges,
      about_us: this.props.project.about_us,
      totalfund: 0,
      user_id: this.props.user.id
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
       axios.post('/api/project', this.state)
       .then(response => {
          // this.props.updateProject
          console.log(response.data, this.state);
          let proj = this.state;
          proj.projectid = response.data[0].projectid;
          // browserHistory.push('/projectView')
          this.context.router.push({

            pathname: '/viewContainer',
            state: {
              project: proj
            }
          })
       })
    //)

    // this.props.saveProject(this.props.project).then(function (res) {
    //   console.log(res.data); // work but not best unecessary dispatch action
    // })
  };

  render() {
    return (
      <div className='finish'>
        <h4> Review </h4>
        <br/>

          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              To infinity
            </Label>
          </FormGroup>


          <br/>

            <Button color="success" onClick={this.handleSubmit.bind(this)} size="lg" block>Create Project</Button>


          <br/>

      </div>

    )
  }
}

Finish.contextTypes = {
  router: React.PropTypes.object.isRequired
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
