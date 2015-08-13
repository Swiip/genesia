import React, { Component, PropTypes } from 'react';
import { PropTypes as RouterPropTypes } from 'react-router';
import { Menu } from '../components/Menu';
import { Header } from '../components/Header';
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
const ThemeManager = new mui.Styles.ThemeManager();

export class AppRoot extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  static contextTypes = {
    router: RouterPropTypes.route
  }

  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  }

  onMenu() {
    this.refs.menu.toggle();
  }

  render() {
    const { router } = this.context;

    const title =
      router.isActive('home') ? 'Genesia' :
      router.isActive('messages') ? 'Messages' :
      router.isActive('world') ? 'Hello' : '';

    return (
      <div>
        <Menu ref="menu"/>
        <Header title={title} onMenu={this.onMenu.bind(this)}/>
        {this.props.children}
      </div>
    );
  }
}
