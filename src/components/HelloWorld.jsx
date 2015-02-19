import React from 'react';
import HelloStore from '../stores/HelloStore';

export default class HelloWorld extends React.Component {
  constructor() {
    this.state = { hello: HelloStore.getState().hello };
  }

  componentDidMount() {
    this.listener = this.update.bind(this);
    HelloStore.listen(this.listener);
  }

  componentWillUnmount() {
    HelloStore.unlisten(this.listener);
  }

  update() {
    this.setState({ hello: HelloStore.getState().hello });
  }

  render() {
    return (
      <h1>{ this.state.hello } { this.props.hello } !</h1>
    );
  }
}
