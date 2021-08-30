import { getSumOfCardValues } from './blackjack';

describe('tests', () => {
  test('getSumOfCardValues', () => {
    expect(getSumOfCardValues([])).toBe(0);
  });
});
