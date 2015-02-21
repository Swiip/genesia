'use strict';

import React from 'react';
import Router from 'react-router';
const  { DefaultRoute, Route } = Router;

import { HelloActions } from './actions/HelloActions';

import Genesia from './components/Genesia.jsx';
import HelloWorld from './components/HelloWorld.jsx';

const World = React.createClass({
  render() {
    return (
      <HelloWorld hello="World" />
    );
  }
});

const Universe = React.createClass({
  render() {
    return (
      <HelloWorld hello="Universe" />
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={Genesia}>
    <Route name="universe" handler={Universe}/>
    <DefaultRoute name="world" handler={World}/>
  </Route>
);

Router.run(routes, function (Handler) {
  HelloActions.hello();
  React.render(<Handler/>, document.getElementById('content'));
});
