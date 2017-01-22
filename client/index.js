import React from "react";
import { render } from "react-dom";
import { Provider} from 'react-redux';
import  thunk  from 'redux-thunk';
import {createStore, applyMiddleware  } from 'redux';

import { Router, browserHistory } from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import $ from "jquery";

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();




let store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
)

import routes from './routes';

render(
<Provider store={store}>
  <MuiThemeProvider>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>
</Provider>
, document.getElementById('app'));
