'use strict';

import React from 'react';
import { DefaultRoute, Route } from 'react-router';

import Genesia from './components/Genesia.jsx';
import Home from './components/Home.jsx';
import Messages from './components/Messages.jsx';
import HelloWorld from './components/HelloWorld.jsx';

const World = React.createClass({
  render() {
    return (
      <HelloWorld hello="World" />
    );
  }
});

export default (
  <Route name="app" path="/" handler={ Genesia }>
    <Route name="world" handler={ World }/>
    <Route name="messages" handler={ Messages }/>
    <DefaultRoute name="home" handler={ Home }/>
  </Route>
);
