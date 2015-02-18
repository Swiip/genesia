const React = require('react');

import HelloStore from '../stores/HelloStore';
import HelloActions from '../actions/HelloActions';

export default class HelloWorld extends React.Component {
  constructor() {
    this.state = { hello: '' };
  }

  componentDidMount() {
    this.listener = this.update.bind(this);
    HelloStore.listen(this.listener);
    HelloActions.hello();
  }

  componentWillUnmount() {
    HelloStore.unlisten(this.listener);
  }

  update() {
    this.setState({ hello: HelloStore.getState().hello });
  }

  render() {
    return (
      <h1>{ this.state.hello }</h1>
    );
  }
}
