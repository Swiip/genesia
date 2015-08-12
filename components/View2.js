import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { transitionTo } from 'redux-react-router';
import { getAllMessages } from '../actions/MessagesActions';

class View2 extends Component {
  static propTypes = {
    messages: PropTypes.instanceOf(List).isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    const actions = { transitionTo, getAllMessages };
    const boundActions = bindActionCreators(actions, props.dispatch)
    _.extend(this, boundActions);
    this.getAllMessages();
  }

  render() {
    return (
      <section className='main'>
        {/*<a onClick={this.transitionTo.bind(null, '/view1')}>View1</a>*/}
        <a href="#/view1">View1</a>
        hello world view 2
        <ul>
          {this.props.messages.map(message => {
            return (
              <li key={message.get('_id')}>{message.get('message')}</li>
            );
          })}
        </ul>
      </section>
    );
  }
}

function select(state) {
  return {
    messages: state.messages
  };
}

const connected = connect(select)(View2);
export { connected as View2 };
