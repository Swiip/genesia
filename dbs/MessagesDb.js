import PouchDb from 'pouchdb';
import { getAllMessages } from '../actions/MessagesActions';

export class MessagesDb {
  constructor() {
    this.localDb = new PouchDb('messages');
    this.remoteDb = new PouchDb('http://localhost:5984/messages');
  }

  sync() {
    if (this.store === null) {
      throw new Error('Store must be set before launching sync');
    }

    this.localDb
      .sync(this.remoteDb, { live: true })
      .on('change', () => {
        this.store.dispatch(getAllMessages());
      });
  }

  getAllMessages() {
    return this.localDb.query((doc) => {
      emit(doc._id, doc);
    }).then((result) => {
      return result.rows.map(row => row.value);
    });
  }

  addMessage(content) {
    return this.localDb.post({
      message: content
    });
  }
}
