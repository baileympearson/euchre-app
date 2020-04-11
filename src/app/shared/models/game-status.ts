export type GameStatus =
  | 'not active'
  | 'waiting for players'
  | 'dealer choosing teams'
  | 'waiting to start'
  | 'choosing trump'
  | 'accepting trump'
  | 'playing hand'
  | 'game over';
