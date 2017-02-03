import React from 'react';

export default class Content extends React.Component {

  render() {
    return (
      <div className='projContent'>
        <h3>About this project</h3>

        <p>We're happy to present to you the Solowheel Iota: a new personal vehicle for the savvy 21st century commuter.</p>

      <figure>
        <img src="https://ksr-ugc.imgix.net/assets/014/665/269/b563e2d73b0052d12870183bd2da420c_original.JPG?w=680&fit=max&v=1480115910&auto=format&q=92&s=9bcebd164d93815b05b093b1eec6cae9" alt="test" />
      </figure>

      
        <p> {this.props.project.description}</p>
      </div>
    )
  }
}
