import * as blackjackServices from './blackjack';
import { getHandResult, getSumOfCardValues } from './blackjack';

describe('tests', () => {
  test('getSumOfCardValues', () => {
    expect(getSumOfCardValues([])).toBe(0);
  });

  test('getHandResult', () => {
    const spy = jest.spyOn(blackjackServices, 'getSumOfCardValues');

    spy.mockReturnValueOnce(21); // player score
    spy.mockReturnValueOnce(17); // dealer score

    expect(getHandResult([], [])).toBe('win');
  });
});
