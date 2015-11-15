import _ from 'lodash';
import React, { Component } from 'react';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { IndexRoute, Route } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import { AppRoot } from './AppRoot';
import DevTools from './DevTools';
import { Home } from '../components/home/Home';
import { Messages } from '../components/messages/Messages';
import { Map } from '../components/map/Map';
import { City } from '../components/city/City';
import { logger, dbActionsMiddleware } from '../middlewares';
import * as dbs from '../dbs';
import * as reducers from '../reducers';

import 'purecss-sass';
import '../index.scss';

const reducer = combineReducers({
  router: routerStateReducer,
  ...reducers
});

const store = compose(
  applyMiddleware(dbActionsMiddleware, logger),
  reduxReactRouter({ createHistory }),
  DevTools.instrument()
)(createStore)(reducer);

_.values(dbs).forEach(db => {
  db.store = store;
  db.sync();
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ReduxRouter>
            <Route path="/" component={AppRoot}>
              <IndexRoute component={Home} />
              <Route path="messages" component={Messages} />
              <Route path="map" component={Map} />
              <Route path="city/:x-:y" component={City} />
            </Route>
          </ReduxRouter>
          <DevTools />
        </div>
      </Provider>
    );
  }
}
