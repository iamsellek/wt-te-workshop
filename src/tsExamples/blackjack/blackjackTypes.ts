export type Suit = 'spades' | 'clubs' | 'diamonds' | 'hearts';

export type Rank =
  | 'A'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'J'
  | 'Q'
  | 'K';

export type Action = 'hit' | 'stand';

export type GameResult = 'win' | 'push' | 'loss' | 'bust' | 'blackjack';

export interface Card {
  numberValue: number; // number value of card
  secondaryNumberValue?: number; // secondary number value of the card, if it has one.
  suit: Suit;
  rank: Rank;
}

const card: Card = {
  numberValue: 11,
  secondaryNumberValue: 1,
};
