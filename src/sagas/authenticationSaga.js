/**
 * @module saga/authenticationSaga
 * @desc authenticationSaga
 */

import { select, call, put } from 'redux-saga/effects';
import qs from 'qs';
import { SagaActionTypes, API } from '../constants';
import { apiRequest as request } from '../services/';
import { defaultReducerActions } from '../actions/reducers/';
import { generateBrowserId } from '../utils/';

const { LOGIN } = SagaActionTypes.authenticationSaga;
const { exampleModel } = defaultReducerActions;
export default {
  sagas: {
    *[LOGIN]() {
      const response = yield call(request.to, {
        url: API.getUserRepo,
        method: 'GET',
        payload: {},
      });
      const { data, err } = response;
      if (data) {
        yield put(
          exampleModel.updateState({
            somethingNew: data,
          }),
        );
      } else {
        throw new Error('error');
      }
    },
  },
};
