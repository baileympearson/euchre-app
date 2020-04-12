import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AcceptTrumpDialogComponent } from './accept-trump-dialog/accept-trump-dialog.component';
import { Store } from '@ngrx/store';
import { CutDeckDialogComponent } from './cut-deck-dialog/cut-deck-dialog.component';
import { WaitingForPlayersDialogComponent } from './waiting-for-players-dialog/waiting-for-players-dialog.component';
import { JoinGameDialogComponent } from './join-game-dialog/join-game-dialog.component';
import { ChooseTrumpDialogComponent } from './choose-trump-dialog/choose-trump-dialog.component';
import { GameOverDialogComponent } from './game-over-dialog/game-over-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class GameDialogsService {
  constructor(private _matDialog: MatDialog, private _store: Store<any>) {}

  openAcceptTrumpDialog(): MatDialogRef<AcceptTrumpDialogComponent> {
    return this._matDialog.open(AcceptTrumpDialogComponent, {
      disableClose: true,
    });
  }

  openCutDeckDialog(): MatDialogRef<CutDeckDialogComponent> {
    return this._matDialog.open(CutDeckDialogComponent, {
      disableClose: true,
    });
  }

  openWaitingForPlayersDialog(): MatDialogRef<
    WaitingForPlayersDialogComponent
  > {
    return this._matDialog.open(WaitingForPlayersDialogComponent, {
      disableClose: true,
    });
  }

  openJoinGameDialog(): MatDialogRef<JoinGameDialogComponent> {
    return this._matDialog.open(JoinGameDialogComponent, {
      disableClose: true,
    });
  }
  
  openChooseTrumpDialog(): MatDialogRef<ChooseTrumpDialogComponent> {
    return this._matDialog.open(ChooseTrumpDialogComponent, {
      disableClose: true,
    });
  }

  openGameOverDialog(): MatDialogRef<GameOverDialogComponent> {
    return this._matDialog.open(GameOverDialogComponent, {
      disableClose: true,
    });
  }
}
