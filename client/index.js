import React from "react";
import { render } from "react-dom";

import { Router, browserHistory } from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import $ from "jquery";

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import routes from './routes';

render(
<MuiThemeProvider>
  <Router history={browserHistory} routes={routes} />
</MuiThemeProvider>
, document.getElementById('app'));
