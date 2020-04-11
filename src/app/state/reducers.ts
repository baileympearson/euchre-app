import { ActionReducerMap } from '@ngrx/store';
import { ClientState, clientStateReducer } from './client-state/client-state.reducers';
import { DBState, dbStateReducer } from './database-state/database-state.reducers';

export interface State {
  'client-state': ClientState;
  'db-state': DBState;
}

export const reducers: ActionReducerMap<State, any> = {
  'client-state': clientStateReducer,
  'db-state': dbStateReducer
};
