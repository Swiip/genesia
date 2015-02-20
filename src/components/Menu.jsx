'use strict';

import React from 'react';
import { Navigation, State } from 'react-router';
import { LeftNav } from 'material-ui';

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
    return (
      <LeftNav ref="leftNav" docked={ false } onChange={ this.onChange } menuItems={ menuItems }/>
    );
  }
});
