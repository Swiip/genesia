import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

const style = {
  textAlign: 'right'
}

@connect(
  () => ({}),
  { pushState }
)
export class Menu extends Component {
  static propTypes = {
    pushState: PropTypes.func
  }

  link(route) {
    this.props.pushState(null, route);
  }

  render() {
    return (
      <div style={style} className="pure-u-1 pure-u-md-1-2">
        <div className="pure-menu-horizontal">
          <ul className="pure-menu-list">
            <li className="pure-menu-item pure-menu-selected">
              <a onClick={this.link.bind(this, '/home')} className="pure-menu-link">Home</a>
            </li>
            <li className="pure-menu-item">
              <a onClick={this.link.bind(this, '/messages')} className="pure-menu-link">Messages</a>
            </li>
            <li className="pure-menu-item">
              <a onClick={this.link.bind(this, '/map')} className="pure-menu-link">Map</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
