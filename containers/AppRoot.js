import React, { Component } from 'react';

export class AppRoot extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
