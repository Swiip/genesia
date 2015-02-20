'use strict';

import React from 'react';
import HelloStore from '../stores/HelloStore';

export default React.createClass({
  getInitialState() {
    return { hello: HelloStore.getState().hello };
  },

  componentDidMount() {
    HelloStore.listen(this.update);
  },

  componentWillUnmount() {
    HelloStore.unlisten(this.update);
  },

  update() {
    this.setState({ hello: HelloStore.getState().hello });
  },

  render() {
    return (
      <h1>{ this.state.hello } { this.props.hello } !</h1>
    );
  }
});
