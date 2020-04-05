import { createSelector } from '@ngrx/store';

export const selectAppState = state => {
    console.log(state)
    return state.appState;
};

export const selectActiveGameState = createSelector(
    selectAppState,
    (state) => {
        return state.activeGame;
    }
);

export const selectScore = createSelector(
    selectActiveGameState,
    (state) => state.score
);

export const selectHandScore = createSelector(
    selectScore,
    (state) => state.hand
);

export const selectGameScore = createSelector(
    selectScore,
    (state) => state.game
);

export const selectTeamPlayers = createSelector(
    selectActiveGameState,
    (activeGameState) => activeGameState.teams
);

export const selectGameName = createSelector(
    selectActiveGameState,
    state => state.gameName
);

export const selectUser = createSelector(
    selectAppState,
    state => state.user
);

export const selectCurrentDealer = createSelector(
    selectActiveGameState,
    state => state.handData.currentDealer
);

export const selectTopOfKitty = createSelector(
    selectActiveGameState,
    state => {
        const kitty = state.handData.kitty;
        if (kitty.length === 0) {
            return [];
        }
        return [kitty[0]];
    }
);

export const selectUserAction = createSelector(
    selectActiveGameState,
    state => state.userAction
)

export const selectElevateCards = createSelector(
    selectActiveGameState,
    state => state.gameMetaData.elevateCards
);

export const selectActivePlayer = createSelector(
    selectActiveGameState,
    state => state.handData.activePlayer
);

export const selectIsCurrentPlayerActive = createSelector(
    selectUser,
    selectActivePlayer,
    (user, activePlayer) => user.toLowerCase() === activePlayer.toLowerCase()
)

export const selectTrumpSuit = createSelector(
    selectActiveGameState,
    state => state.handData.trumpSuit
)