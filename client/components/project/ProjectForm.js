// import React, { Component, PropTypes} from 'react';
// import { reduxForm } from 'redux-form';
//
// class Project extends Component {
//   render() {
//     const {fields: {title, categories, location}, handleSubmit} = this.props;
//
//     return (
//     <form >
//
//       <div className="form-group">
//         <label>Title</label>
//         <input type="text" className="form-control"/>
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
//     </form>
//
//     )
//   }
// }
//
// export default reduxForm({
//   form: 'ProjectForm',
//   fields: ['title', 'categories', 'location']
// })(Project);

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ProjectForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
ProjectForm = reduxForm({
  form: 'contact' // a unique name for this form
})(ProjectForm);

export default ProjectForm;
