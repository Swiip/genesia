import _ from 'lodash';

export function dbActionsMiddleware(db, { getState }) {
  return next =>
    function dispatch(action) {
      if (action && _.isFunction(action.then)) {
        return action.then(dispatch);
      }

      if (_.isFunction(action)) {
        return dispatch(action(db, getState));
      }

      return next(action);
    };
}
