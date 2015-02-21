'use strict';

import React from 'react';
import { Navigation, State } from 'react-router';
import { Toolbar, LeftNav } from 'material-ui';

const menuItems = [
  { route: 'world', text: 'World' },
  { route: 'universe', text: 'Universe' }
];

export default React.createClass({
  mixins: [Navigation, State],

  toggle() {
    this.refs.leftNav.toggle();
  },

  onChange(event, key, payload) {
    this.transitionTo(payload.route);
  },

  render() {
    var header = <Toolbar><h1>Genesia</h1></Toolbar>;

    return (
      <LeftNav ref="leftNav" header={ header } docked={ false } onChange={ this.onChange } menuItems={ menuItems }/>
    );
  }
});