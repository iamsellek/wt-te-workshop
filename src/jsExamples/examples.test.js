const sum = require('./examples').sum;
const getStageOfChildhood = require('./examples').getStageOfChildhood;

describe('sum tests', () => {
  test('ensure it adds two numbers correctly', () => {
    expect(sum(1, 1)).toBe(2);
  });
});

describe('getStageOfChildhood tests', () => {
  test('test 1', () => {});
});
