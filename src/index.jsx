'use strict';

import React from 'react';
import Router from 'react-router';
const  { DefaultRoute, Route, RouteHandler } = Router;

import { HelloActions } from './actions/HelloActions';

import Header from './components/Header.jsx';
import HelloWorld from './components/HelloWorld.jsx';

const App = React.createClass({
  render() {
    return (
      <div>
        <Header/>
        <RouteHandler/>
      </div>
    );
  }
});

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
  <Route name="app" path="/" handler={App}>
    <Route name="univers" handler={Universe}/>
    <DefaultRoute name="world" handler={World}/>
  </Route>
);

Router.run(routes, function (Handler) {
  HelloActions.hello();
  React.render(<Handler/>, document.getElementById('content'));
});
