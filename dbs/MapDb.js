import PouchDb from 'pouchdb';
import { getAllLocations } from '../actions/MapActions';

class MapDb {
  constructor() {
    this.localDb = new PouchDb('map');
    this.remoteDb = new PouchDb('http://localhost:5984/map');
  }

  sync() {
    if (this.store === null) {
      throw new Error('Store must be set before launching sync');
    }

    this.localDb
      .sync(this.remoteDb, { live: true })
      .on('change', () => {
        this.store.dispatch(getAllLocations());
      });

    this.store.dispatch(getAllLocations());
  }

  getAllLocations() {
    return this.localDb.query(doc => {
      emit(doc._id, doc);
    }).then(result => {
      return result.rows.map(row => row.value);
    });
  }
}

export const mapDb = new MapDb();
