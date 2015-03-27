'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import Header from './Header.jsx';
import Menu from './Menu.jsx';

export default class Genesia extends React.Component {
  onMenu() {
    this.refs.menu.toggle();
  }

  render() {
    const { router } = this.context;

    const title =
      router.isActive('home') ? 'Genesia' :
      router.isActive('messages') ? 'Messages' :
      router.isActive('world') ? 'Hello' : '';

    return (
      <div>
        <Menu ref="menu"/>
        <Header title={ title } onMenu={ this.onMenu.bind(this) }/>
        <RouteHandler/>
      </div>
    );
  }
}

Genesia.contextTypes = {
  router: React.PropTypes.func
};
