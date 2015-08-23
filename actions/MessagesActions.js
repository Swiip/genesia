import * as types from '../constants/ActionTypes';
import { messagesDb } from '../dbs/MessagesDb';

export function getAllMessages() {
  return async () => ({
    type: types.GET_ALL_MESSAGES,
    res: await messagesDb.getAllMessages()
  });
}
