import { id } from '../src';

describe('id', () => {
  it('should make an id', () => {
    let myId = id('foobar');

    expect(myId).toMatch(/foobar_[A-z0-9]{12}/);
  });
});
