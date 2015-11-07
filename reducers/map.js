import Immutable from 'immutable';
const { List, Map } = Immutable;

import * as types from '../constants/ActionTypes';

const initialState = Map({
  locations: List(),
  viewBox: List([0, 0, 1000, 1000])
});

const proportionalPosition = (viewBox, coords, rect) => {
  return [
    coords.x * viewBox[2] / rect.width,
    coords.y * viewBox[3] / rect.height
  ];
}

export function map(state = initialState, action) {
  let viewBox, posX, posY;
  switch (action.type) {
  case types.GET_ALL_LOCATIONS:
    return state.set('locations', Immutable.fromJS(action.res));
  case types.UPDATE_RECT_MAP:
    viewBox = state.get('viewBox').toJS();
    viewBox[2] = action.rect.width;
    viewBox[3] = action.rect.height;
    return state.set('viewBox', Immutable.fromJS(viewBox));
  case types.PAN_MAP:
    viewBox = state.get('viewBox').toJS();
    [ posX, posY ] = proportionalPosition(viewBox, action.coords, action.rect);
    viewBox[0] += posX;
    viewBox[1] += posY;
    return state.set('viewBox', Immutable.fromJS(viewBox));
  case types.ZOOM_MAP:
    viewBox = state.get('viewBox').toJS();
    [ posX, posY ] = proportionalPosition(viewBox, action.coords, action.rect);
    const [ moveX, moveY ] = [
      posX - posX * action.proportion,
      posY - posY * action.proportion
    ];
    viewBox[0] += moveX;
    viewBox[1] += moveY;
    viewBox[2] *= action.proportion;
    viewBox[3] *= action.proportion;
    return state.set('viewBox', Immutable.fromJS(viewBox));
  default:
    return state;
  }
}
