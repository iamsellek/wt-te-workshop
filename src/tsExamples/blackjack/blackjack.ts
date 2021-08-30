import { Action, Card, GameResult } from './blackjackTypes';

export const getSumOfCardValues = (cards: Card[]): number =>
  cards.reduce((total, currentCard) => {
    let newTotal: number;

    /**
     * if it has a secondary value and the first value puts it over
     * 21, add the secondary value to the total instead of the first.
     * (for the purposes of the te workshop, this will only ever apply
     * to aces, which in blackjack can be worth 11 or 1.)
     */
    if (
      currentCard.secondaryNumberValue &&
      total + currentCard.numberValue > 21
    ) {
      newTotal = total + currentCard.secondaryNumberValue;
    } else {
      newTotal = total + currentCard.numberValue;
    }

    return newTotal;
  }, 0);

/**
 * in blackjack, the player's goal is to beat the dealer's hand's
 * score without having a score of over 21.
 *
 * going over 21 results in a 'bust.'
 *
 * a tie is referred to as a 'push.'
 */
export const getHandResult = (
  playerCards: Card[],
  dealerCards: Card[]
): GameResult => {
  const playerScore = getSumOfCardValues(playerCards);
  const dealerScore = getSumOfCardValues(dealerCards);

  if (isBlackjack(playerCards)) {
    if (isBlackjack(dealerCards)) {
      return 'push';
    } else {
      return 'blackjack';
    }
  }

  if (playerScore > 21) {
    return 'bust';
  }

  if (playerScore < dealerScore) {
    return 'loss';
  }

  if (playerScore === dealerScore) {
    return 'push';
  }

  return 'win';
};

/**
 * dealer always hits until their total is 17 or higher.
 */
export const getDealerAction = (cards: Card[]): Action => {
  const sum = getSumOfCardValues(cards);

  if (sum < 17) {
    return 'hit';
  }

  return 'stand';
};

/**
 * a player's hand is referred to as a 'blackjack' if the
 * first two cards they are dealt have a card value sum of
 * 21.
 */
export const isBlackjack = (cards: Card[]) =>
  cards.length === 2 && getSumOfCardValues(cards) === 21;
