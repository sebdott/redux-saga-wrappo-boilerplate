import * as constants from 'mt-constants';

describe('constants', () => {
  it('should have the correct constants', () => {
    expect(constants).toMatchSnapshot();
  });
});
