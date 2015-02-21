'use strict';

import React from 'react';
import { RouteHandler, State } from 'react-router';
import Header from './Header.jsx';
import Menu from './Menu.jsx';

export default React.createClass({
  mixins: [State],

  onMenu() {
    this.refs.menu.toggle();
  },

  render() {
    var title =
      this.isActive('world') ? 'World' :
      this.isActive('universe') ? 'Universe' : '';

    return (
      <div>
        <Menu ref="menu"/>
        <Header title={ title } onMenu={ this.onMenu }/>
        <RouteHandler/>
      </div>
    );
  }
});
