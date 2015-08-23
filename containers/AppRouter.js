import React, { Component, PropTypes } from 'react';
import { Router, Route } from 'react-router';
import { AppRoot } from './AppRoot';
import { Home } from '../components/home/Home';
import { Messages } from '../components/messages/Messages';
import { Map } from '../components/map/Map';
import { history } from 'react-router/lib/HashHistory';

export class AppRouter extends Component {
  static propTypes = {
    route: PropTypes.func
  }

  render() {
    return (
      <Router history={history}>
        <Route component={this.props.route}>
          <Route path="/" component={AppRoot}>
            <Route path="/home" component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/map" component={Map} />
          </Route>
        </Route>
      </Router>
    );
  }
}
