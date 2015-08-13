import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { Toolbar, ToolbarTitle, ToolbarGroup, IconButton } from 'material-ui';

export class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    onMenu: PropTypes.func
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup float="left">
          <IconButton iconClassName="menuIcon" tooltip="Menu" touch={true} onClick={this.props.onMenu}/>
        </ToolbarGroup>
        <ToolbarTitle text={this.props.title} />
      </Toolbar>
    );
  }
}
