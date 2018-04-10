import { delay } from 'redux-saga';
import { expectSaga } from 'redux-saga-test-plan';

import { LOGIN } from 'sagas/authenticationSaga';

describe('authentication', () => {
  it('should have the expected watchers', done => {
    expectSaga(LOGIN)
      .run()
      .then(saga => {
        expect(saga).toMatchSnapshot();
        done();
      });
  });
});
