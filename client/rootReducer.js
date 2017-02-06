import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import project from './reducers/projectReducer';
import user from './reducers/userReducer';
import totalfund from './reducers/fundReducer';
import { reducer as formReducer } from 'redux-form';

import { combineForms } from 'react-redux-form';

const initialProject = {title: ''};

export default combineReducers({ // pass Object will all reducers
  flashMessages,
  project,
  user,
  totalfund
  // project:projectReducer
})
// form: formReducer,
// deep: combineForms({
//   project: initialProject
// }, 'deep')
