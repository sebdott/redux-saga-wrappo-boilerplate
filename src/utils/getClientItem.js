import {getComponents} from 'redux-saga-wrappo';
import client from 'clients/index';

export default function getClientItem(listOfClientItem) {
  return getComponents(client, listOfClientItem);
}
