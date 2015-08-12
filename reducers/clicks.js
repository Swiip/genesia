import { Map } from 'immutable';

import { ADD_CLICK } from '../constants/ActionTypes';

const initialState = Map({
  clicks: 0
});

export function clicks(state = initialState, action) {
  switch(action.type) {
    case ADD_CLICK:
      return state.set('clicks', state.get('clicks') + 1);
    default:
      return state;
  }
}
