import React, { Component } from 'react';
import {connect } from 'react-redux';
import { updateProject } from '../../actions/projectActions';
import {  browserHistory, hashHistory } from "react-router";
// import { Field, reduxForm } from 'redux-form';
// import { Control, Form, actions } from 'react-redux-form';
// //  class Test extends React.Component {
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
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      shortBlurb:'',
      category: ''
    }
  };

  next() {
    this.context.router.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.updateProject({
      title:this.state.title,
      shortBlurb:this.state.shortBlurb,
      category: this.state.category
    })
    browserHistory.push('/project/test2');
  };

handleChange(e){

    this.setState({[e.target.name]: e.target.value})
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Title</Label>
          <Input type="text" name="title" id="exampleEmail" placeholder="title" onChange={this.handleChange.bind(this)}/>
          {this.state.email}
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">shortBlurb</Label>
          <Input type="text" name="shortBlurb" id="examplePassword" placeholder="blurb" onChange={this.handleChange.bind(this)}/>

        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Categorie</Label>
          <Input type="select" name="category" id="exampleSelect"onChange={this.handleChange.bind(this)}>
            <option name="category">Fun</option>
            <option name="category">Art</option>
            <option name="category">Game</option>
            <option name="category">Tech</option>
            <option name="category">Food</option>
          </Input>
        </FormGroup>
          <Button onClick={this.handleSubmit.bind(this)}>Next</Button>
      </Form>
    );
  }
}

// class Test extends React.Component {
//   // handleSubmit(test) {
//   //   const { dispatch } = this.props;
//   //
//   //   // Do whatever you like in here.
//   //   // You can use actions such as:
//   //   // dispatch(actions.submit('user', somePromise));
//   //   dispatch(actions.submit(this.props.updateProject(project)));
//   //   // etc.
//   // }
//   render() {
//     return (
//
//
//       <Form model="deep.project"
//         onSubmit={(user) => this.handleSubmit(user)}>
//
//         <label>Title:</label>
//         <Control.text model="user.title" />
//
//         <label>Categories:</label>
//         <Control.text model="user.categories" />
//
//           <label>Location:</label>testtest
//           <Control.text model="user.location" />
//
//         <button type="submit">
//           Finish registration!
//         </button>
//       </Form>
//     );
//   }
// }
//
// export default Test;

function mapStateToProps(state){
    return {
      title:state.project.title,
      shortBlurb:state.project.shortBlurb,
      category:state.project.category

      }
}


const mapDispatchToActionCreator = {
  updateProject
}

// Test.contextTypes = {
//   router: React.PropTypes.object.isRequired
// }

export default connect(mapStateToProps, mapDispatchToActionCreator) (Test);


// submit to datase
// axios.post('url',
// {
//   data:this.props
// })
