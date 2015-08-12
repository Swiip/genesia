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
    const { clicks } = this.props;
    return (
      <section className='main' onClick={this.add.bind(this)}>
        hello world view {clicks}
      </section>
    );
  }
}

function select(state) {
  console.log('select', state.click);
  return {
    clicks: state.clicks.get('clicks')
  };
}

const connected = connect(select)(View1);
export { connected as View1 };
