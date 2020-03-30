import { Card } from './card';


export interface PlayerHand {
    cardsInHand: Card[];
    playedCard: Card | undefined;
    showCardsFaceUp: boolean;
}
