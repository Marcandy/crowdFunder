import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import SignupPage from './components/login/SignupPage';
import Login from './components/login/Login';

import Project from './components/project/Project';

import ProjectNav from './components/project/ProjectNav';
import Test from './components/project/Test';
import Test2 from './components/project/Test2';
import Media from './components/project/Media';
import Finish from './components/project/Finish';
import ViewContainer from './components/projectView/ViewContainer';



export default (
  <Route path="/" component={App}  >

    <IndexRoute component={Home} />


    <Route path="signup" component={SignupPage} />
    <Route path="login" component={Login} />

    <Route path="project" component={Project} />

    <Route path="projectNav" component={ProjectNav} >
      <IndexRoute component={Test} />
        <Route path="test" component={Test} />
        <Route path="test2" component={Test2} />
        <Route path="media" component={Media} />
        <Route path="finish" component={Finish} />
    </Route>

    <Route path="viewContainer" component={ViewContainer} />

  </Route>
)
