import PouchDb from 'pouchdb';
import MessagesActions from '../actions/MessagesActions';

class MessagesDb {
  constructor() {
    this.localDb = new PouchDb('messages');
    this.remoteDb = new PouchDb('http://localhost:5984/messages');

    this.localDb
      .sync(this.remoteDb, { live: true })
      .on('change', function() {
        MessagesActions.MessagesActions.findAll();
      });
  }
}

export default new MessagesDb();
