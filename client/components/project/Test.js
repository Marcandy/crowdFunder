import React, { Component } from 'react';
import {connect } from 'react-redux';
import { updateProject } from '../../actions/projectActions';
// import { Field, reduxForm } from 'redux-form';

 class Test extends React.Component {
  updateStore () {
      let title = document.getElementById('title')
      this.props.updateProject({
        title
      })
    }

  render() {
    // const { handleSubmit } = this.props;

    return (

    <section>
      <div className="form-group">
        <label>Title</label>
        <input id='title' type="text" className="form-control"/>
      </div>
      <div className="form-group">
        <label>Categories</label>
        <input type="text" className="form-control"/>
      </div>
      <div className="form-group">
        <label>Location</label>
        <input type="text" className="form-control"/>
      </div>

      <div className="form-group">
    <label >description</label>
    <textarea className="form-control" id="exampleTextarea"></textarea>
  </div>
  {this.props.title}
  <submit onClick={this.updateStore}>
fin
  </submit>
    </section>


    );
  }
}
// suscribe to store
// function mapStateToProps(state){
//     return {
//       title:state.project.title,
//       desc:state.project.desc
//     }
// }
//
//
// const mapDispatchToActionCreator = {
//   updateProject
// }
//
// export default connect(mapStateToProps, mapDispatchToActionCreator) (Test);


// submit to datase
// axios.post('url',
// {
//   title:this.props.title,
//   desc:this.props.desc
// })
