import React from 'react';
import Media from './Media.js';
import StripeView from './StripeView.js';
import axios from 'axios';
import Content from './content.js';
import Rewards from './Rewards.js';
import './viewProject.scss';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react'

//import {bindActionCreators } from 'redux'
//here import your get all action here getProject
 class ViewContainer extends React.Component{

  // getInitialState() {
  //   return {
  //     isLoading: true,
  //     scores: []
  //   }
  // }
  componentWillMount() {
    console.log(this.props.location.state.project, 'cont view');
  }

  // componentDidMount() {
  //   console.log(this.props.location.state.project);
  // }

  render(){
    console.log(this.props.location.state.project);
    return(

      <div className='viewContainer posFix'>

        <div className='title'>
          <h1>{this.props.location.state.project.title}</h1>
          <p>{this.props.location.state.project.shortblurb}</p>
        </div>

        <div className='top'>
          <div className='media'>
            <Media project={this.props.location.state.project} />
              <Segment.Group horizontal className='segP'>
                  <Segment>{this.props.location.state.project.category}</Segment>
                  <Segment>{this.props.location.state.project.location}</Segment>
                </Segment.Group>
          </div>
          <div className = 'goal'>
            <StripeView project={this.props.location.state.project} />
          </div>

        </div>

        <div className='pcontent'>
            <Content project={this.props.location.state.project} />
            <Rewards project={this.props.location.state.project} />
        </div>


        <footer className='vfooter'>
          <h1 ><span className='ftitle1'>Crowd</span><span className='ftitle2'>Funder</span></h1>
          <hr/>
         </footer>
      </div>


    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return  bindActionCreators({ getProject }, dispatch);
// }

export default ViewContainer;
//export default connect(null, mapDispatchToProps)(PostsIndex);
// could be just export default connect(null, {getProject})(PostsIndex);
// it give us access to the method we pass
