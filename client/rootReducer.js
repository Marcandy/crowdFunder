import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import projectReducer from './reducers/projectReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({ // pass Object will all reducers
  flashMessages,
  projectReducer,
  form: formReducer
})
