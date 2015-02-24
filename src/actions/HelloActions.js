'use strict';

import alt from '../alt';
import HelloDb from '../dbs/HelloDb';

class Actions {
  hello() {
    HelloDb.localDb.get('1f79ac2cdd7e8916575f13dcd00037c8')
      .then(function(hello) {
        this.dispatch(hello.hello);
        
      }.bind(this));
  }
}

// Not export as default to allow circle deps with HelloDb
export const HelloActions = alt.createActions(Actions);
