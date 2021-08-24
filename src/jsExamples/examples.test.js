const sum = require('./examples').sum;

describe('sum', () => {
  test('ensure it adds two numbers correctly', () => {
    expect(sum(1, 1)).toBe(2);
  });
});
