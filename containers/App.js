import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerStateReducer, reduxRouteComponent } from 'redux-react-router';
import { Provider } from 'react-redux';
import { AppRouter } from './AppRouter';
import * as reducers from '../reducers';

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};


const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const reducer = combineReducers({
  router: routerStateReducer,
  ...reducers
})
const store = createStoreWithMiddleware(reducer);
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
