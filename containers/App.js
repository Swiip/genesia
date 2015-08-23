import _ from 'lodash';
import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerStateReducer, reduxRouteComponent } from 'redux-react-router';
import { Provider } from 'react-redux';
import { AppRouter } from './AppRouter';
import { logger, dbActionsMiddleware } from '../middlewares';
import * as dbs from '../dbs';
import * as reducers from '../reducers';

import '../index.scss';

const middlewares = [ dbActionsMiddleware, logger ];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const reducer = combineReducers({
  router: routerStateReducer,
  ...reducers
})
const store = createStoreWithMiddleware(reducer);

_.values(dbs).forEach(db => {
  db.store = store;
  db.sync();
});

const RouteComponent = reduxRouteComponent(store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <AppRouter route={RouteComponent} />}
      </Provider>
    );
  }
}
