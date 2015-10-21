import React, { Component, PropTypes } from 'react';
import { PropTypes as RouterPropTypes } from 'react-router';
import { Menu } from '../components/Menu';
import { Header } from '../components/Header';

export class AppRoot extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  static contextTypes = {
    history: RouterPropTypes.history
  }

  onMenu() {
    this.refs.menu.toggle();
  }

  render() {
    const { history } = this.context;

    const title =
      history.isActive('home') ? 'Genesia' :
      history.isActive('messages') ? 'Messages' :
      history.isActive('world') ? 'Hello' : '';

    return (
      <div>
        <Menu ref="menu"/>
        <Header title={title} onMenu={this.onMenu.bind(this)}/>
        {this.props.children}
      </div>
    );
  }
}
