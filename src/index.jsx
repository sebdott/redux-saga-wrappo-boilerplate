import '@babel/polyfill';
import NProgress from 'nprogress';
import React from 'react';
import {appCreator} from 'redux-saga-wrappo';
import App from 'initials';
import rootReducer from 'reducers';
import rootSaga from 'sagas';

NProgress.configure({
  showSpinner: false,
  parent: '#root',
  easing: 'ease',
  speed: 500,
});

let middleware = [];
if (process.env.NODE_ENV === 'development') {
  const {createLogger} = require('redux-logger');
  middleware.push(createLogger({collapsed: true}));
}

appCreator(<App />, document.getElementById('root'), {
  rootSaga,
  rootReducer,
  persistReducerList: ['userModel'],
  middleware,
});
