import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { WHITE, TURQUOISE } from '../constants/Colors';

const style = {
  container: {
    textAlign: 'right'
  },
  link: {
    cursor: 'pointer'
  }
}

@connect(
  state => ({ pathname: state.router.location.pathname }),
  { pushState }
)
export class Menu extends Component {
  static propTypes = {
    pushState: PropTypes.func,
    pathname: PropTypes.string
  }

  link(route) {
    this.props.pushState(null, route);
  }

  linkStyle(link) {
    return Object.assign({}, style.link, {
      color: this.props.pathname.indexOf(link) === -1 ? WHITE : TURQUOISE
    });
  }

  render() {
    return (
      <div style={style.container} className="pure-u-1 pure-u-md-1-2">
        <div className="pure-menu-horizontal">
          <ul className="pure-menu-list">
            <li className="pure-menu-item pure-menu-selected">
              <a onClick={this.link.bind(this, '/')} className="pure-menu-link" style={this.linkStyle('home')}>
                Home
              </a>
            </li>
            <li className="pure-menu-item">
              <a onClick={this.link.bind(this, '/messages')} className="pure-menu-link" style={this.linkStyle('messages')}>
                Messages
              </a>
            </li>
            <li className="pure-menu-item">
              <a onClick={this.link.bind(this, '/map')} className="pure-menu-link" style={this.linkStyle('map')}>
                Map
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
