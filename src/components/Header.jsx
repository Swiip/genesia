'use strict';

import React from 'react';
import { Toolbar, ToolbarGroup, IconButton } from 'material-ui';

const style = {
  button: {
    paddingBottom: '6px'
  },
  icon: {
    height: '32px',
    lineHeight: '32px'
  }
};

export default React.createClass({
  onClick() {
    if(this.props.onMenu) {
      this.props.onMenu();
    }
  },

  render() {
    return (
      <Toolbar>
        <ToolbarGroup float="left">
          <IconButton style={ style.button } tooltip="Menu" touch={ true } onClick={ this.onClick }>
            <img style={ style.icon } src="assets/icons/menu.svg"/>
          </IconButton>
        </ToolbarGroup>
      </Toolbar>
    );
  }
});
