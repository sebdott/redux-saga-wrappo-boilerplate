import {select, call, put} from 'redux-saga/effects';
import qs from 'qs';
import {Saga, API} from 'constants';
import {type as TYPE} from 'constants';

const {postErrorNotification} = Saga.errorSaga;
export default {
  sagas: {
    *[postErrorNotification]({error}) {
      alert(error.message);
    },
  },
};
