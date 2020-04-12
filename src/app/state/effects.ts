import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { databaseUpdateState } from './actions';
import { withLatestFrom, filter, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import {
  selectGameStatus,
  isUserActivePlayer,
} from './database-state/database-state.selectors';
import { GameDialogsService } from '../game/game-dialogs/game-dialog.service';

@Injectable()
export class AppEffects {
  constructor(
    private _actions$: Actions,
    private _store: Store<any>,
    private _gameDialogService: GameDialogsService
  ) {}

  handleShowChooseTrumpDialog$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(databaseUpdateState),
        withLatestFrom(
          this._store.pipe(select(isUserActivePlayer)),
          this._store.pipe(select(selectGameStatus))
        ),
        filter(([_, userActive, gameStatus]) => {
          return userActive && gameStatus === 'choosing trump';
        }),
        tap(() => {
          this._gameDialogService.openChooseTrumpDialog();
        })
      );
    },
    { dispatch: false }
  );

  handleShowAcceptTrumpDialog$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(databaseUpdateState),
        withLatestFrom(
          this._store.pipe(select(isUserActivePlayer)),
          this._store.pipe(select(selectGameStatus))
        ),
        filter(([_, userActive, gameStatus]) => {
          return userActive && gameStatus === 'accepting trump';
        }),
        tap(() => {
          this._gameDialogService.openAcceptTrumpDialog();
        })
      );
    },
    { dispatch: false }
  );

  handleShowGameOverDialog$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(databaseUpdateState),
        withLatestFrom(
          this._store.pipe(select(selectGameStatus))
        ),
        filter(([_, gameStatus]) => {
          return gameStatus === 'game over';
        }),
        tap(() => {
          this._gameDialogService.openGameOverDialog();
        })
      );
    },
    { dispatch: false }
  );

}
