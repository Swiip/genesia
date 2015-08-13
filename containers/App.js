import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerStateReducer, reduxRouteComponent } from 'redux-react-router';
import { Provider } from 'react-redux';
import { AppRouter } from './AppRouter';
import { logger, dbActionsMiddleware } from '../middlewares';
import { MessagesDb } from '../dbs/MessagesDb';
import * as reducers from '../reducers';

import '../index.scss';

const messagesDb = new MessagesDb();
const messagesDbActionsMiddleware = dbActionsMiddleware.bind(null, messagesDb);
const middlewares = [ logger, messagesDbActionsMiddleware ];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const reducer = combineReducers({
  router: routerStateReducer,
  ...reducers
})
const store = createStoreWithMiddleware(reducer);
messagesDb.store = store;
messagesDb.sync();
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
