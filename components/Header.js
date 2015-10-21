import React, { Component, PropTypes } from 'react';

export class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    onMenu: PropTypes.func
  }

  render() {
    return (
      <div>
        <div float="left">
          <i iconClassName="menuIcon" tooltip="Menu" touch={true} onClick={this.props.onMenu}/>
        </div>
        <div text={this.props.title} />
      </div>
    );
  }
}
