import { getComponents } from 'redux-saga-wrappo/getComponents';
import client from '../client/index';

export function getClientItem(listOfClientItem) {
  return getComponents(client, listOfClientItem);
}
