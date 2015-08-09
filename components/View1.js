import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addClick } from '../actions/DefaultActions';

class View1 extends Component {
  // static propTypes = {
  //   todos: PropTypes.instanceOf(List).isRequired,
  //   actions: PropTypes.object.isRequired
  // };

  add() {
    this.props.dispatch(addClick());
  }

  render() {
    const { clicks, dispatch } = this.props;
    return (
      <section className='main' onClick={this.add.bind(this)}>
        hello world view {clicks}
      </section>
    );
  }
}

function select(state) {
  return {
    clicks: state.get('clicks')
  };
}

const connected = connect(select)(View1);
export { connected as View1 };
