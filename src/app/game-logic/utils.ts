import { GameStatus } from '../shared/models/game-status';
import { CARDS } from './game-constants';

export function isGameInProgress(gameStatus: GameStatus): boolean {
  return (
    gameStatus === 'choosing trump' ||
    gameStatus === 'accepting trump' ||
    gameStatus === 'playing hand'
  );
}

export function shuffleCards() {
  const arrayToShuffle = JSON.parse(JSON.stringify(CARDS));
  for (let i = arrayToShuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayToShuffle[i], arrayToShuffle[j]] = [arrayToShuffle[j], arrayToShuffle[i]];
  }
  return arrayToShuffle;
}

export function deal() {
  const shuffledCards = shuffleCards();
  return {
    player1: shuffledCards.slice(0,5),
    player2: shuffledCards.slice(5,10),
    player3: shuffledCards.slice(10, 15),
    player4: shuffledCards.slice(15,20),
    kitty: shuffledCards.slice(20),
  };
}

