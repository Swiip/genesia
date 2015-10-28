import * as types from '../constants/ActionTypes';
import { mapDb } from '../dbs/MapDb';

export function getAllLocations() {
  return async () => ({
    type: types.GET_ALL_LOCATIONS,
    res: await mapDb.getAllLocations()
  });
}

export function changeViewBox(viewBox) {
  return {
    type: types.CHANGE_VIEW_BOX,
    viewBox
  }
}
