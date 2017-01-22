import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';

export default combineReducers({ // pass Object will all reducers
  flashMessages
})
