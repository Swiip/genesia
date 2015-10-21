import _ from 'lodash';
import React, { Component } from 'react';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-react-router';
import { Route } from 'react-router';
import createHistory from 'history/lib/createHashHistory'

import { AppRoot } from './AppRoot';
import { Home } from '../components/home/Home';
import { Messages } from '../components/messages/Messages';
import { Map } from '../components/map/Map';
import { logger, dbActionsMiddleware } from '../middlewares';
import * as dbs from '../dbs';
import * as reducers from '../reducers';

import '../index.scss';

// const middlewares = [ dbActionsMiddleware, logger ];
// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
// const reducer = combineReducers({
//   router: routerStateReducer,
//   ...reducers
// })
// const store = createStoreWithMiddleware(reducer);

const reducer = combineReducers({
  router: routerStateReducer,
  ...reducers
});

const store = compose(
  applyMiddleware(dbActionsMiddleware, logger),
  reduxReactRouter({ createHistory })
)(createStore)(reducer);


_.values(dbs).forEach(db => {
  db.store = store;
  db.sync();
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter>
          <Route path="/" component={AppRoot}>
            <Route path="/home" component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/map" component={Map} />
          </Route>
        </ReduxRouter>
      </Provider>
    );
  }
}
