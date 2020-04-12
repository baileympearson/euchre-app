import { shuffleCards, deal, getNextActivePlayer } from "./utils";
import { Card } from '../shared/models/card';



describe('shuffleCards tests', () => {
    it('should shuffle cards correctly', () => {
        const cards = shuffleCards()
        expect(cards.length).toBe(24);
    });

    it('should shuffle differently every time? lol', () => {
        const shuffle1 = shuffleCards();
        const shuffle2 = shuffleCards();
        expect(shuffle1[0]).not.toEqual(shuffle2[0]);
    });
});

describe('deal() tests', () => {
    describe('should have the right properties', () => {
        let dealtCards = deal();
        expect(dealtCards).toHaveProperty('player1');
        expect(dealtCards).toHaveProperty('player2');
        expect(dealtCards).toHaveProperty('player3');
        expect(dealtCards).toHaveProperty('player4');
        expect(dealtCards).toHaveProperty('kitty');
    })

    describe('each property should have the number of cards', () => {
        let dealtCards = deal();
        expect(dealtCards.player1.length).toBe(5);
        expect(dealtCards.player2.length).toBe(5);
        expect(dealtCards.player3.length).toBe(5);
        expect(dealtCards.player4.length).toBe(5);
        expect(dealtCards.kitty.length).toBe(4);
    });

    describe('all 24 cards should be distinct', () => {
        let dealtCards = deal();
        let cards = new Set<string>();
        dealtCards.player1.forEach(card => cards.add(JSON.stringify(card)));
        dealtCards.player2.forEach(card => cards.add(JSON.stringify(card)));
        dealtCards.player3.forEach(card => cards.add(JSON.stringify(card)));
        dealtCards.player4.forEach(card => cards.add(JSON.stringify(card)));
        dealtCards.kitty.forEach(card => cards.add(JSON.stringify(card)));

        expect(cards.size).toBe(24);
    });
});

describe('getNextActivePlayer() tests', () => {
    const orderingOfPlayers = ['player1', 'player2', 'player3', 'player4'];
    it('should get the right player if looking for first player', () => {
        const nextPlayer = getNextActivePlayer(orderingOfPlayers, 'player1');
        expect(nextPlayer).toBe('player2');
    });

    it('should get the right player if looking for second player', () => {
        const nextPlayer = getNextActivePlayer(orderingOfPlayers, 'player2');
        expect(nextPlayer).toBe('player3');
    });

    it('should get the right player if looking for third player', () => {
        const nextPlayer = getNextActivePlayer(orderingOfPlayers, 'player3');
        expect(nextPlayer).toBe('player4');
    });

    it('should get the right player if looking for fourth player', () => {
        const nextPlayer = getNextActivePlayer(orderingOfPlayers, 'player4');
        expect(nextPlayer).toBe('player1');
    });

    it('should make a deep copy of return value', () => {
        const nextPlayer = getNextActivePlayer(orderingOfPlayers, 'player4');
        orderingOfPlayers[1] = 'test value';
        expect(nextPlayer).toBe('player1');
    });
})

