import _ from 'lodash';

export const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  const state = store.getState();
  const jsState = {};
  for (let prop in state) {
    if (_.isObject(state[prop]) && _.isFunction(state[prop].toJS)) {
      jsState[prop] = state[prop].toJS();
    } else {
      jsState[prop] = state[prop];
    }
  }
  console.log('next state', jsState);
  return result;
};
