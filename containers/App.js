import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppRouter, routes } from './AppRouter';
import { mainReducer } from '../reducers';

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
//const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(mainReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <AppRouter /> }
      </Provider>
    );
  }
}
