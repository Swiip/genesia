'use strict';

import React from 'react';
import MessagesStore from '../stores/MessagesStore';
import { MessagesActions } from '../actions/MessagesActions';
import { Paper, Dialog, FlatButton, TextField } from 'material-ui';
import marked from 'marked';

export default class Messages extends React.Component {
  constructor() {
    this.state = { messages: MessagesStore.getState().messages };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    MessagesStore.listen(this.update);
    MessagesActions.findAll();
  }

  componentWillUnmount() {
    MessagesStore.unlisten(this.update);
  }

  addClick() {
    this.refs.addDialog.show();
  }

  submitClick() {
    MessagesActions.submitNew(this.refs.messageContent.getValue());
    this.refs.addDialog.dismiss();
  }

  update() {
    this.setState({ messages: MessagesStore.getState().messages });
  }

  render() {
    var standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onClick: this.submitClick }
    ];

    var messages = this.state.messages.map(function(message) {
      return (
        <Paper zDepth={2} key={ message._id }>
          <div dangerouslySetInnerHTML={ { __html: marked(message.message) } }></div>
        </Paper>
      );
    });

    return (
      <div>
        <Dialog title="Add" ref="addDialog" actions={ standardActions }>
        </Dialog>
        <h1>Messages</h1>
        <FlatButton onClick={ this.addClick }>Add</FlatButton>
        { messages }
      </div>
    );
    /*<TextField ref="messageContent"
               hintText="Markdown accepted"
               floatingLabelText="Message content" />*/
  }
}
