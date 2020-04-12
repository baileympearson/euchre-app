import { createSelector } from '@ngrx/store';
import {
  selectGameStatus,
  selectPlayerOrdering,
  selectPlayersHands,
  selectCardsInPlay,
  selectPlayers,
  selectCurrentDealer,
  selectScores,
  selectTeamPlayers,
  selectCurrentActivePlayer,
  isUserActivePlayer,
} from './database-state/database-state.selectors';
import { GameStatus } from '../shared/models/game-status';
import { selectPlayerKey } from './client-state/client-state.selectors';
import { PlayerKey } from '../shared/models/player-key';
import { Orientation } from '../shared/models/orientation';

export const isGameActive = createSelector(
  selectGameStatus,
  (gameStatus: GameStatus) => {
    return (
      gameStatus !== 'not active' &&
      gameStatus !== 'waiting for players' &&
      gameStatus !== 'dealer choosing teams' &&
      gameStatus !== 'waiting to start'
    );
  }
);

export const selectShiftedPlayerOrdering = createSelector(
  selectPlayerKey,
  selectPlayerOrdering,
  (playerKey: PlayerKey, ordering: PlayerKey[]) => {
    if (ordering.length < 4) {
      return undefined;
    }
    const indexOfPlayer = ordering.findIndex((item) => item === playerKey);

    return ordering.map((_, index, array) => {
      return array[(index + indexOfPlayer) % 4];
    });
  }
);

export const selectPlayerOrientationMap = createSelector(
  selectShiftedPlayerOrdering,
  (ordering: PlayerKey[]) => {
    return !!ordering
      ? {
          south: ordering[0],
          west: ordering[1],
          north: ordering[2],
          east: ordering[3],
        }
      : undefined;
  }
);

export const selectHandForOrientation = (orientation: Orientation) => createSelector(
    selectPlayersHands,
    selectPlayerOrientationMap,
    (hands, playerOrientationMap) => {
        const playerKey: PlayerKey = playerOrientationMap[orientation];
        return hands[playerKey];
    }
);

export const selectActiveCardForOrientation = (orientation: Orientation) => createSelector(
    selectCardsInPlay,
    selectPlayerOrientationMap,
    (cardsInPlay, playerOrientationMap) => {
        const playerKey: PlayerKey = playerOrientationMap[orientation];
        return cardsInPlay[playerKey];
    }
);

export const selectNameForOrientation = (orientation: Orientation) => createSelector(
    selectPlayers,
    selectPlayerOrientationMap,
    (players, playerOrientationMap) => {
        const playerKey: PlayerKey = playerOrientationMap[orientation];
        return players[playerKey];
    }
);

export const selectDealerOrientation = createSelector(
    selectCurrentDealer,
    selectPlayerOrientationMap,
    (currentDealerKey, playerOrientationMap) => {
        return Object.keys(playerOrientationMap).find(
            (key: Orientation) => playerOrientationMap[key] === currentDealerKey
        );
    }
);

export const isUserDealer = createSelector(
  selectPlayerKey,
  selectCurrentDealer,
  (userKey, currentDealer) => userKey === currentDealer
);

export const isOnWinningTeam = createSelector(
  selectScores,
  selectPlayerKey,
  selectTeamPlayers,
  ({ gameScore }, playerKey, { teamA}) => {
    const winningTeam = gameScore.teamA === 10 ? 'teamA' : 'teamB';
    return teamA.player1 === playerKey || teamA.player2 === playerKey ? true : false;
  }
);

export const selectGameMessage = createSelector(
  selectGameStatus,
  isUserActivePlayer,
  selectCurrentActivePlayer,
  selectPlayers,
  (gameStatus: GameStatus, isUserActive: boolean, currentActivePlayer: PlayerKey, players) => {
    if (gameStatus !== 'playing hand') {
      return '';
    } else {
      if (isUserActive) {
        return 'Select a card to play';
      } else {
        const activePlayer = players[currentActivePlayer];
        return `${activePlayer} is playing...`;
      }
    }
  }
);
