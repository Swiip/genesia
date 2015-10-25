import React, { Component, PropTypes } from 'react';
import { Menu } from './Menu';

export class Header extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return (
      <div className="header pure-g">
        <div className="pure-u-1 pure-u-md-1-2">
          <div className="pure-menu">
            <a className="pure-menu-heading">Genesia | {this.props.title}</a>
          </div>
        </div>
        <Menu/>
      </div>
    );
  }
}
