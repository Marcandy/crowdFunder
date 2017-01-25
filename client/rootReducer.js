import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import projectReducer from './reducers/projectReducer';
import { reducer as formReducer } from 'redux-form';

import { combineForms } from 'react-redux-form';

const initialProject = {title: ''};

export default combineReducers({ // pass Object will all reducers
  flashMessages,
  projectReducer,
  form: formReducer,
  deep: combineForms({
    project: initialProject
  }, 'deep')
})
