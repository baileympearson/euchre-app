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
)

export const selectGameScore = createSelector(
    selectScore,
    (state) => state.game
)

export const selectTeamPlayers = createSelector(
    selectActiveGameState,
    (activeGameState) => activeGameState.teams
);

export const selectGameName = createSelector(
    selectActiveGameState,
    state => state.gameName
);
