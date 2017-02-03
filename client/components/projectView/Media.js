import React from 'react'
import './viewProject.scss'

export default class Media extends React.Component{

  render(){
    return(
      <source src={this.props.project.video} type="video/mp4" />

    )
  }
}
