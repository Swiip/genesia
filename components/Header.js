import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

@connect(
  () => ({}),
  { pushState }
)
export class Header extends Component {
  static propTypes = {
    router: PropTypes.object,
    title: PropTypes.string,
    onMenu: PropTypes.func,
    pushState: PropTypes.func
  }

  /* <i iconClassName="menuIcon" tooltip="Menu" touch={true} onClick={this.props.onMenu}/> */
  link(route) {
    this.props.pushState(null, route);
  }

  render() {
    return (
      <div className="header">
        <div className="pure-menu pure-menu-horizontal">
          <a className="pure-menu-heading">Genesia | {this.props.title}</a>

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
