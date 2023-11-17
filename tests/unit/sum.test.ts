import oneSum from '../_mocks/sum';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(oneSum(1, 2)).toBe(3);
  });
});