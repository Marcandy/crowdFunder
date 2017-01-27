import React from 'react'
import About from './about.js'
import Goal from './goal.js'
import './project.scss'
import { connect } from 'react-redux';
//import {bindActionCreators } from 'redux'
//here import your get all action here getProject
 class TopProject extends React.Component{

  // getInitialState() {
  //   return {
  //     isLoading: true,
  //     scores: []
  //   }
  // }
  componentWillMount() {
    console.log("a good time to fetch post data");
  }

  // componentDidMount() {
  //   console.log(this.props.location.state.project);
  // }

  render(){
    console.log(this.props.user);
    return(
      <div className='TopProject'>
       <div className='about'>
        <About project={this.props.location.state.project} />
        </div>
          <div className = 'goal'>
        <Goal project={this.props.location.state.project}/>
      </div>
      </div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return  bindActionCreators({ getProject }, dispatch);
// }

export default TopProject;
//export default connect(null, mapDispatchToProps)(PostsIndex);
// could be just export default connect(null, {getProject})(PostsIndex);
// it give us access to the method we pass
