import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { transitionTo } from 'redux-react-router';
import marked from 'marked';
import { getAllMessages } from '../../actions/MessagesActions';

@connect(state => ({ messages: state.messages }))
export class Messages extends Component {
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
    var standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onClick: this.submitClick }
    ];

    return (
      <section className='main'>
        <div title="Add" ref="addDialog" actions={standardActions} />
        <button onClick={this.addClick}>Add</button>
        {this.props.messages.map(message => (
          <div zDepth={2} key={message.get('_id')}>
            <div dangerouslySetInnerHTML={{ __html: marked(message.get('message')) }}></div>
          </div>
        ))}
      </section>
    );
  }
}
