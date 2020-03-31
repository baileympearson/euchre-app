import { CardValue } from './card-value';
import { Suit } from './suit';

export interface Card {
    value: CardValue;
    suit: Suit;
}
