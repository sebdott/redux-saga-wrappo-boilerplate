import * as reducers from 'mt-action-reducers';
import * as saga from 'mt-action-saga';

describe('actions', () => {
  it('should have the correct actions', () => {
    expect(reducers).toMatchSnapshot();
    expect(saga).toMatchSnapshot();
  });
});
