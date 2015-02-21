import alt from '../alt';
import { MessagesActions } from '../actions/MessagesActions';

class MessagesStore {
  constructor() {
    this.bindActions(MessagesActions);
    this.messages = [];
  }

  findAll(messages) {
    this.messages = messages.rows.map(function(messageEntry) {
      return messageEntry.value;
    });
  }
}


export default alt.createStore(MessagesStore);
