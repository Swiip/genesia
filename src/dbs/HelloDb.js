import PouchDb from 'pouchdb';
import HelloActions from '../actions/HelloActions';

class HelloDb {
  constructor() {
    this.localDb = new PouchDb('hello');
    this.remoteDb = new PouchDb('http://localhost:5984/hello');

    this.localDb
      .sync(this.remoteDb, { live: true })
      .on('change', function() {
        HelloActions.HelloActions.hello();
      });
  }
}

export default new HelloDb();
