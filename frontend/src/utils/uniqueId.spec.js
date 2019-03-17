import { uniqueId } from './uniqueId';

describe('UniqueId', () => {
  it('returns a unique Id', () => {
    const expected = uniqueId();
    expect(uniqueId()).not.toEqual(expected);
  });
});
