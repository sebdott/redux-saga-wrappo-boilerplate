import * as reducers from 'mt-reducers';

describe('reducers', () => {
  it('should have the correct reducers', () => {
    expect(reducers).toMatchSnapshot();
  });
});
