import Immutable from 'immutable';
const { List, Map } = Immutable;

import {
  GET_ALL_LOCATIONS,
  CHANGE_VIEW_BOX
} from '../constants/ActionTypes';

const initialState = Map({
  locations: List(),
  viewBox: List([0, 0, 1000, 1000])
});

export function map(state = initialState, action) {
  switch (action.type) {
  case GET_ALL_LOCATIONS:
    return state.set('locations', Immutable.fromJS(action.res));
  case CHANGE_VIEW_BOX:
    return state.set('viewBox', Immutable.fromJS(action.viewBox));

  default:
    return state;
  }
}
