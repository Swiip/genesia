'use strict';

import React from 'react';
import Router from 'react-router';

import { HelloActions } from './actions/HelloActions';
import HelloWorld from './components/HelloWorld.jsx';

const DefaultRoute = Router.DefaultRoute;
const Link = Router.Link;
const Route = Router.Route;
const RouteHandler = Router.RouteHandler;

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="world">World</Link></li>
            <li><Link to="univers">Univers</Link></li>
          </ul>
        </header>

        <RouteHandler/>
      </div>
    );
  }
}

class World extends React.Component {
  render() {
    return (
      <HelloWorld hello="World" />
    );
  }
}

class Univers extends React.Component {
  render() {
    return (
      <HelloWorld hello="Univers" />
    );
  }
}

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="univers" handler={Univers}/>
    <DefaultRoute name="world" handler={World}/>
  </Route>
);

Router.run(routes, function (Handler) {
  HelloActions.hello();
  React.render(<Handler/>, document.getElementById('content'));
});
