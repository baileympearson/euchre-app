import { GameStatus } from '../shared/models/game-status';

export function isGameInProgress(gameStatus: GameStatus): boolean {
  return (
    gameStatus === 'choosing trump' ||
    gameStatus === 'accepting trump' ||
    gameStatus === 'playing hand'
  );
}
