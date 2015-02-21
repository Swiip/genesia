'use strict';

import _ from 'lodash';
import React from 'react';
import { Toolbar, ToolbarGroup, IconButton } from 'material-ui';

const style = {
  icon: {
    height: '26px'
  }
};

export default React.createClass({
  onClick() {
    if(_.isFunction(this.props.onMenu)) {
      this.props.onMenu();
    }
  },

  render() {
    return (
      <Toolbar>
        <ToolbarGroup float="left">
          <IconButton tooltip="Menu" touch={ true } onClick={ this.onClick }>
            <img style={ style.icon } src="assets/icons/menu.svg"/>
          </IconButton>
        </ToolbarGroup>
        <h2>{ this.props.title }</h2>
      </Toolbar>
    );
  }
});
