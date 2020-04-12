import { createReducer, on, Action } from '@ngrx/store';
import { elevateCardsInHand, unElevateCardsInHand } from './client-state.actions';
import { PlayerKey } from 'src/app/shared/models/player-key';
import { playerEnteredGame } from '../actions';

export interface ClientState {
  player: string;
  playerKey: PlayerKey,
  invalidPlayErrorMessage: string | undefined;
  elevateHand: boolean;
}

export const initialState: ClientState = {
  player: 'bailey',
  playerKey: 'player1',
  invalidPlayErrorMessage: undefined,
  elevateHand: false,
};

const reducer = createReducer(
  initialState,
  on(elevateCardsInHand, (state) => {
    return {
        ...state,
        elevateHand: true
    };
  }),
  on(unElevateCardsInHand, (state) => {
    return {
        ...state,
        elevateHand: false
    };
  }),
  on(playerEnteredGame, (state, { payload }) => ({
      ...state,
      player: payload.name
    })
  ),
);

export function clientStateReducer(state: ClientState | undefined, action: Action) {
  return reducer(state, action);
}
