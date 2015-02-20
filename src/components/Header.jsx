'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Toolbar, ToolbarGroup, FlatButton } from 'material-ui';

export default React.createClass({
  render() {
    return (
      <Toolbar>
        <ToolbarGroup float="left">
          <Link to="world"><FlatButton label="World" primary={true} /></Link>
          <Link to="univers"><FlatButton label="Univers" primary={true} /></Link>
        </ToolbarGroup>
      </Toolbar>
    );
  }
});
