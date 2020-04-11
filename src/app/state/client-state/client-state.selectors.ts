import { createSelector, select } from '@ngrx/store';
import { selectClientState } from '../selectors';
import { ClientState } from './client-state.reducers';

export const selectUser = createSelector(
  selectClientState,
  (state: ClientState) => state.player
);

export const selectElevateCards = createSelector(
  selectClientState,
  (state: ClientState) => state.elevateHand
);

export const selectInvalidPlayErrorMessage = createSelector(
  selectClientState,
  (state: ClientState) => state.invalidPlayErrorMessage
);

export const selectPlayerKey = createSelector(
  selectClientState,
  (state: ClientState) => state.playerKey
);
