import React, { Component, PropTypes } from 'react';
import { Header } from '../components/Header';
import { connect } from 'react-redux';

@connect(state => ({ pathname: state.router.location.pathname }))
export class AppRoot extends Component {
  static propTypes = {
    children: PropTypes.object,
    pathname: PropTypes.string
  }

  onMenu() {
    this.refs.menu.toggle();
  }

  render() {
    const { pathname } = this.props;

    const title =
      pathname.includes('home') ? 'Genesia' :
      pathname.includes('messages') ? 'Messages' :
      pathname.includes('world') ? 'Hello' : '';

    /* <Menu ref="menu"/> */

    return (
      <div>
        <Header title={title} onMenu={this.onMenu.bind(this)}/>
        {this.props.children}
      </div>
    );
  }
}
