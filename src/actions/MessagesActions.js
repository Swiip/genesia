'use strict';

import alt from '../alt';
import MessagesDb from '../dbs/MessagesDb';

class Actions {
  findAll() {
    MessagesDb.localDb.query(function (doc) {
      emit(doc._id, doc);
    }).then(function(docs) {
      this.dispatch(docs);
    }.bind(this));
  }

  submitNew(content) {
    MessagesDb.localDb.post({
      message: content
    });
  }
}

// Not export as default to allow circle deps with HelloDb
export const MessagesActions = alt.createActions(Actions);
