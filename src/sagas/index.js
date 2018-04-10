import { generateSagas } from 'redux-saga-wrappo/generateSagas';

import authenticationSaga from './authenticationSaga';

export default generateSagas([authenticationSaga]);
