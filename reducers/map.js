import Immutable from 'immutable';
const { List } = Immutable;

import { GET_ALL_LOCATIONS } from '../constants/ActionTypes';

const initialState = List();

export function map(state = initialState, action) {
  switch (action.type) {
  case GET_ALL_LOCATIONS:
    return Immutable.fromJS(action.res);

  default:
    return state;
  }
}
