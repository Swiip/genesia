import _ from 'lodash';

export function dbActionsMiddleware({ getState }) {
  return next =>
    function dispatch(action) {
      if (action && _.isFunction(action.then)) {
        return action.then(dispatch);
      }

      if (_.isFunction(action)) {
        return dispatch(action(getState));
      }

      return next(action);
    };
}
