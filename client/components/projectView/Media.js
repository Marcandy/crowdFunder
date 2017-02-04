import React from 'react'
import './viewProject.scss'

export default class Media extends React.Component{

  render(){
    return(
    <video id="background-video" controls>
      <source src={this.props.project.video} type="video/mp4" />
    </video>
    )
  }
}
