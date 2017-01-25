import React, { Component } from 'react';
import {connect } from 'react-redux';
import { updateProject } from '../../actions/projectActions';
import { Field, reduxForm } from 'redux-form';
import { Control, Form, actions } from 'react-redux-form';
//  class Test extends React.Component {
//
//   updateStore () {
//
//       this.props.updateProject({
//         title
//       })
//     }
//
//   render() {
//     const { fields: {title, categories, location}, handleSubmit} = this.props;
//
//     return (
//
//     <Form>
//       <div className="form-group">
//         <label>Title</label>
//         <input id='title' type="text" className="form-control"/>
//       </div>
//       <div className="form-group">
//         <label>Categories</label>
//         <input type="text" className="form-control"/>
//       </div>
//       <div className="form-group">
//         <label>Location</label>
//         <input type="text" className="form-control"/>
//       </div>
//
//
//   {this.props.title}
//   <submit onClick={this.updateStore}>
// fin
//   </submit>
//     </section>
//
//
//     );
//   }
// }
// suscribe to store

class Test extends React.Component {
  // handleSubmit(test) {
  //   const { dispatch } = this.props;
  //
  //   // Do whatever you like in here.
  //   // You can use actions such as:
  //   // dispatch(actions.submit('user', somePromise));
  //   dispatch(actions.submit(this.props.updateProject(project)));
  //   // etc.
  // }
  render() {
    return (


      <Form model="deep.project"
        onSubmit={(user) => this.handleSubmit(user)}>

        <label>Title:</label>
        <Control.text model="user.title" />

        <label>Categories:</label>
        <Control.text model="user.categories" />

          <label>Location:</label>
          <Control.text model="user.location" />

        <button type="submit">
          Finish registration!
        </button>
      </Form>
    );
  }
}

export default Test;

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
