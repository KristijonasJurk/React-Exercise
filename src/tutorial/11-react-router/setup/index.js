import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return <Router>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <Home />
      </Route>
      <Route path='/people'>
        <Home />
      </Route>
      <Route>
        <Error path='*' />
      </Route>
    </Switch>
  </Router>;
};

export default ReactRouterSetup;
