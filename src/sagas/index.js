import {generateSagas} from 'redux-saga-wrappo';

import pageSaga from './pageSaga';
import errorSaga from './errorSaga';
export default generateSagas([pageSaga, errorSaga]);
