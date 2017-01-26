import React from "react";
import { render } from "react-dom";
import { Provider} from 'react-redux';
import  thunk  from 'redux-thunk';
import {createStore, applyMiddleware, compose  } from 'redux';
import rootReducer from './rootReducer';

import { Router, browserHistory, hashHistory } from "react-router";
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import $ from "jquery";

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



let store = createStore(
  rootReducer, //setting combine reducers
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

)

import routes from './routes';

render(
<Provider store={store}>

    <Router history={browserHistory} routes={routes} />

</Provider>
, document.getElementById('app'));
