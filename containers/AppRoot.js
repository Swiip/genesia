import React, { Component, PropTypes } from 'react';
import { Header } from '../components/Header';
import { connect } from 'react-redux';
import { WHITE, BLACK } from '../constants/Colors';

const style = {
  color: WHITE,
  backgroundColor: BLACK,
  minHeight: '100%'
};

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
      pathname.includes('home') ? 'Home' :
      pathname.includes('messages') ? 'Messages' :
      pathname.includes('map') ? 'Map' :
      '';

    /* <Menu ref="menu"/> */

    return (
      <div style={style}>
        <Header title={title} onMenu={this.onMenu.bind(this)}/>
        {this.props.children}
      </div>
    );
  }
}
