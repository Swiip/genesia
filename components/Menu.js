import React, { Component } from 'react';
import { PropTypes as RouterPropTypes } from 'react-router';

const menuItems = [
  { route: 'home', text: 'Home' },
  { route: 'messages', text: 'Messages' },
  { route: 'map', text: 'Map' }
];

export class Menu extends Component {
  static contextTypes = {
    router: RouterPropTypes.route
  }

  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.refs.leftNav.toggle();
  }

  onChange(event, key, payload) {
    this.context.router.transitionTo(payload.route);
  }

  render() {
    var header = (
      <div>
        <h1>Genesia</h1>
      </div>
    );

    return (
      <div ref="leftNav"
           header={header}
           docked={false}
           onChange={this.onChange.bind(this)}
           menuItems={menuItems}/>
    );
  }
}
