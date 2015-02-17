const React = require('react');

export default class HelloWorld extends React.Component {
  constructor() {
    this.state = {
      hello: 'Hello World'
    };
  }

  render() {
    return (
      <h1>{this.state.hello}</h1>
    );
  }
}
