'use strict';

import React from 'react';
import Router from 'react-router';

import { HelloActions } from './actions/HelloActions';

import routes from './routes.jsx';

Router.run(routes, function (Handler) {
  HelloActions.hello();
  React.render(<Handler/>, document.getElementById('content'));
});
