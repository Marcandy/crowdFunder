import React from 'react'
import About from './about.js'
import Goal from './goal.js'
import './project.scss'
export default class TopProject extends React.Component{

  // getInitialState() {
  //   return {
  //     isLoading: true,
  //     scores: []
  //   }
  // }

  componentDidMount() {
    console.log(this.props.location.state.project);
  }

  render(){
    console.log(this.props.user);
    return(
      <div className='TopProject'>
       <div className='about'>
        <About
          project=(this.props.location.state.project)
          />
        </div>
          <div className = 'goal'>
        <Goal/>
      </div>
      </div>
    )
  }
}
