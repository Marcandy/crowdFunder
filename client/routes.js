import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import SignupPage from './components/login/SignupPage';
import Project from './components/project/Project';
import Test from './components/project/Test';

export default (
  <Route path="/" component={App} >

    <IndexRoute component={Home} />

    <Route path="signup" component={SignupPage} />


    <Route path="project" component={Project} />
    <Route path="test" component={Test} />
  </Route>
)
