import React from 'react';
import Media from './Media.js';
import Goal from './goal.js';
import title from './title.js';
import content from './content.js';
import './project.scss';
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
      <div className='viewContainer'>

        <div className='title'>

        </div>

        <div className='media'>
          <Media project={this.props.location.state.project} />
        </div>

        <div className = 'goal'>
          <Goal project={this.props.location.state.project}/>
        </div>

        <div className = 'projContent'>

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
