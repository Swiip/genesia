import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { AppRoot } from './AppRoot';
import { View1 } from '../components/View1';
import { View2 } from '../components/View2';
import { history } from 'react-router/lib/HashHistory';

export class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={AppRoot}>
          <Route path="/view1" component={View1} />
          <Route path="/view2" component={View2} />
        </Route>
      </Router>
    );
  }
}
