'use strict';

import React from 'react';
import { Toolbar, LeftNav } from 'material-ui';

const menuItems = [
  { route: 'home', text: 'Home' },
  { route: 'messages', text: 'Messages' },
  { route: 'world', text: 'World' }
];

export default class Menu extends React.Component {
  toggle() {
    this.refs.leftNav.toggle();
  }

  onChange(event, key, payload) {
    this.context.router.transitionTo(payload.route);
  }

  render() {
    var header = <Toolbar><h1>Genesia</h1></Toolbar>;

    return (
      <LeftNav ref="leftNav" header={ header } docked={ false } onChange={ this.onChange.bind(this) } menuItems={ menuItems }/>
    );
  }
}

Menu.contextTypes = {
  router: React.PropTypes.func
};
