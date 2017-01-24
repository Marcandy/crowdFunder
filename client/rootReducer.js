import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({ // pass Object will all reducers
  flashMessages,
  form: formReducer
})
