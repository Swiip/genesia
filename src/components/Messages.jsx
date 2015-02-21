'use strict';

import React from 'react';
import MessagesStore from '../stores/MessagesStore';
import { MessagesActions } from '../actions/MessagesActions';
import { Paper } from 'material-ui';
import marked from 'marked';

export default React.createClass({
  getInitialState() {
    return { messages: MessagesStore.getState().messages };
  },

  componentDidMount() {
    MessagesStore.listen(this.update);
    MessagesActions.findAll();
  },

  componentWillUnmount() {
    MessagesStore.unlisten(this.update);
  },

  update() {
    this.setState({ messages: MessagesStore.getState().messages });
  },

  render() {
    var messages = this.state.messages.map(function(message) {
      return (
        <Paper zDepth={2} key={ message._id }>
          <h3>{ message.title }</h3>
          <div dangerouslySetInnerHTML={ { __html: marked(message.content) } }></div>
        </Paper>
      );
    });

    return (
      <div>
        <h1>Messages</h1>
        { messages }
      </div>
    );
  }
});
