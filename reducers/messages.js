import Immutable from 'immutable';
const { List } = Immutable;

import { GET_ALL_MESSAGES, ADD_MESSAGE } from '../constants/ActionTypes';

const initialState = List();

export function messages(state = initialState, action) {
  switch (action.type) {
  case GET_ALL_MESSAGES:
    return Immutable.fromJS(action.res);

  case ADD_MESSAGE:
    console.log('add message', action);
    return state;

  default:
    return state;
  }
}
