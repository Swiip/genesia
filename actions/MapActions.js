import * as types from '../constants/ActionTypes';
import { mapDb } from '../dbs/MapDb';

export function getAllLocations() {
  return async () => ({
    type: types.GET_ALL_LOCATIONS,
    res: await mapDb.getAllLocations()
  });
}

export function updateRectMap(rect) {
  return {
    type: types.UPDATE_RECT_MAP,
    rect
  }
}

export function panMap(coords, rect) {
  return {
    type: types.PAN_MAP,
    coords, rect
  }
}

export function zoomMap(proportion, coords, rect) {
  return {
    type: types.ZOOM_MAP,
    proportion, coords, rect
  }
}
