import React from 'react';
import './project.scss';
let PropTypes = React.PropTypes;
import StripeView from './StripeView.js';

export default class ProjectGoals extends React.Component{

  render(){
    return(
      <div className='about'>
          <StripeView />
    </div>
    )
  }
}

// ProjectGoals.propTypes = {
//   project: PropTypes.project.isRequired
// }
