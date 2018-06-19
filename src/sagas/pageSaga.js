import {select, call, put} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import qs from 'qs';
import {Saga, API} from 'constants';
import reducers from 'actions/reducers/';
import {apiHandler} from 'services';

const {userModel: userReducer} = reducers;

const {pageSaga} = Saga;

function* callGitRepo() {
  // yield put(utilSaga.startLoad({pageReducer}));
  // // yield put(userReducer.updateState({isLoading: true}));
  // const {appModel, userModel} = yield select(state => state);
  // const {username, password} = userModel;
  // const body = {
  //   username: username,
  //   webUniqueCode: userModel.webUniqueCode,
  // };
  const response = yield apiHandler.request({
    url: 'https://api.github.com/users/codedsphere/repos',
    method: 'get',
    // headers: {
    //   device_token: appModel.deviceToken,
    // },
    // body,
  });
  const {err, data} = response;
  if (data) {
  } else if (err) {
  }
}

function* getUserLogout() {
  yield put(userReducer.updateState({isLoading: true}));
  yield call(delay, 1500);
  yield put(userReducer.updateState({isLogon: false, isLoading: false}));
}

function* putUserLogin() {
  const {appModel, userModel} = yield select(state => state);
  const {username, password} = userModel;
  if (username === 'jon' && password === 'doe') {
    yield put(userReducer.updateState({isLoading: true}));
    yield call(delay, 1500);
    yield put(userReducer.updateState({isLogon: true}));
    yield put(userReducer.updateState({isLoading: false}));
  }
}

export default {
  sagas: {
    [pageSaga.callGitRepo]: callGitRepo,
    [pageSaga.putUserLogin]: putUserLogin,
    [pageSaga.getUserLogout]: getUserLogout,
  },
};
