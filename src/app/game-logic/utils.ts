import { GameStatus } from '../shared/models/game-status';
import { CARDS } from './game-constants';
import { Card } from '../shared/models/card';
import { DBState } from '../state/database-state/database-state.reducers';

export function isGameInProgress(gameStatus: GameStatus): boolean {
  return (
    gameStatus === 'choosing trump' ||
    gameStatus === 'accepting trump' ||
    gameStatus === 'playing hand'
  );
}

export function shuffleCards(): Card[] {
  const arrayToShuffle = JSON.parse(JSON.stringify(CARDS));
  for (let i = arrayToShuffle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayToShuffle[i], arrayToShuffle[j]] = [
      arrayToShuffle[j],
      arrayToShuffle[i],
    ];
  }
  return arrayToShuffle;
}

export function deal() {
  const shuffledCards = shuffleCards();
  return {
    player1: shuffledCards.slice(0, 5),
    player2: shuffledCards.slice(5, 10),
    player3: shuffledCards.slice(10, 15),
    player4: shuffledCards.slice(15, 20),
    kitty: shuffledCards.slice(20),
  };
}

export function getNextActivePlayer(
  playerOrdering: string[],
  currentActivePlayer: string
): string {
  const indexOfActivePlayer = playerOrdering.findIndex(
    (player) => player === currentActivePlayer
  );
  return (playerOrdering[(indexOfActivePlayer + 1) % 4] as string).slice();
}

export function getNextOpenPlayerKey(players): string {
  if (players.player1.length === 0) {
    return 'player1';
  } else if (players.player2.length === 0) {
    return 'player2';
  } else if (players.player3.length === 0) {
    return 'player3';
  } else if (players.player4.length === 0) {
    return 'player4';
  } else {
    return '';
  }
}
