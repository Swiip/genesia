'use strict';

import React from 'react';
import Router from 'react-router';
const  { DefaultRoute, Route, RouteHandler } = Router;

import { HelloActions } from './actions/HelloActions';

import Header from './components/Header.jsx';
import HelloWorld from './components/HelloWorld.jsx';
import Menu from './components/Menu.jsx';

const App = React.createClass({
  onMenu() {
    this.refs.menu.toggle();
  },

  render() {
    return (
      <div>
        <Menu ref="menu"/>
        <Header onMenu={ this.onMenu }/>
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
    <Route name="universe" handler={Universe}/>
    <DefaultRoute name="world" handler={World}/>
  </Route>
);

Router.run(routes, function (Handler) {
  HelloActions.hello();
  React.render(<Handler/>, document.getElementById('content'));
});
