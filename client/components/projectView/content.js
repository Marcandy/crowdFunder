import React from 'react';

export default class Content extends React.Component {

  render() {
    return (
      <div className='projContent'>
        
        <h3>About this project</h3>
        <p>{this.props.project.description}</p>
        <br/>

      <figure>
        <img src={this.props.project.image} alt="test" />
      </figure>

        <h3>Risks and challenges</h3>
        <p>{this.props.project.risks_challenges}</p>
        <br/>

        <h3>About Us</h3>
        <p>{this.props.project.about_us}</p>
      </div>
    )
  }
}
