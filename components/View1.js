import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { transitionTo } from 'redux-react-router';
import { addClick } from '../actions/ClicksActions';

class View1 extends Component {
  static propTypes = {
    clicks: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    const actions = { transitionTo, addClick };
    const boundActions = bindActionCreators(actions, props.dispatch)
    _.extend(this, boundActions);
  }

  render() {
    return (
      <section className='main'>
        {/*<a onClick={this.transitionTo.bind(null, '/view2')}>View2</a>*/}
        <a href="#/view2">View2</a>
        <a onClick={this.addClick}>hello world view {this.props.clicks}</a>
      </section>
    );
  }
}

function select(state) {
  return {
    clicks: state.clicks.get('clicks')
  };
}

const connected = connect(select)(View1);
export { connected as View1 };
