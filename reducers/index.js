import { Map } from 'immutable';

import { ADD_CLICK } from '../constants/ActionTypes';

const initialState = Map({
  clicks: 0
});

export function mainReducer(state = initialState, action) {
  console.log('main reducer', state);
  switch(action.type) {
    case ADD_CLICK:
      return state.set('clicks', state.get('clicks') + 1);
    default:
      return state;
  };
}
