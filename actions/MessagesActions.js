import * as types from '../constants/ActionTypes';

export function getAllMessages() {
  return async db => ({
    type: types.GET_ALL_MESSAGES,
    res: await db.getAllMessages()
  });
}
