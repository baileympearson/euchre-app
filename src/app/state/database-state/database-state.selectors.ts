import { createSelector } from '@ngrx/store';
import { selectDBState, selectClientState } from '../selectors';
import { DBState } from './database-state.reducers';
import { selectUser } from '../client-state/client-state.selectors';

export const selectGameName = createSelector(
  selectDBState,
  (state: DBState) => state.gameName
);

export const selectGameHost = createSelector(
  selectDBState,
  (state: DBState) => state.gameHost
);

export const selectGameStatus = createSelector(
  selectDBState,
  (state: DBState) => state.gameStatus
);

export const selectCurrentActivePlayer = createSelector(
  selectDBState,
  (state: DBState) => state.currentActivePlayer
);

export const selectCurrentDealer = createSelector(
  selectDBState,
  (state: DBState) => state.currentDealer
);

export const selectTopOfKitty = createSelector(
  selectDBState,
  (state: DBState) => {
    return state.kitty.length > 0 ? state.kitty[0] : [];
  }
);

export const selectUserMessage = createSelector(
  selectDBState,
  (state: DBState) => state.actionMessage
);

export const selectTrumpSuit = createSelector(
  selectDBState,
  (state: DBState) => state.trumpSuit
);

export const selectScores = createSelector(selectDBState, (state: DBState) => {
  return {
    gameScore: {
      teamA: state.scores.teamAScore,
      teamB: state.scores.teamBScore,
    },
    handScore: {
      teamA: state.scores.teamATricks,
      teamB: state.scores.teamBTricks,
    },
  };
});

export const selectHandScores = createSelector(
  selectScores,
  (scores) => scores.handScore
);

export const selectGameScores = createSelector(
  selectScores,
  (scores) => scores.gameScore
);

export const selectTeamPlayers = createSelector(
  selectDBState,
  (state: DBState) => state.teams
);

export const isUserActivePlayer = createSelector(
  selectUser,
  selectCurrentActivePlayer,
  (user: string, currentActivePlayer: string) => {
    return (
      user.length > 0 &&
      currentActivePlayer.length > 0 &&
      user.toLowerCase() === currentActivePlayer.toLowerCase()
    );
  }
);

export const selectPlayers = createSelector(
  selectDBState,
  (dbState: DBState) => dbState.players
);

export const selectPlayersHands = createSelector(
  selectDBState,
  (dbState: DBState) => dbState.hands
);

export const selectCardsInPlay = createSelector(
  selectDBState,
  (dbState: DBState) => dbState.cardsInPlay
);

export const selectPlayerOrdering = createSelector(
  selectDBState,
  (dbState: DBState) => dbState.playerOrdering
)