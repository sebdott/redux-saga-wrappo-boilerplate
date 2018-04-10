import 'raf/polyfill';
import '@babel/polyfill';
import 'core-js/shim';
import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { appCreator } from 'redux-saga-wrappo/appCreator';

import history from './utils/history';
import App from './initial';
import rootSaga from './sagas';
import rootReducer from './reducers';

appCreator(
  <ConnectedRouter history={history}>
    <Route path="/" component={App} />
  </ConnectedRouter>,
  document.getElementById('root'),
  { rootSaga, rootReducer },
);
