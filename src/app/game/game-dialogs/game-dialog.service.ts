import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AcceptTrumpDialogComponent } from './accept-trump-dialog/accept-trump-dialog.component';
import { Store } from '@ngrx/store';
import { toggleElevateCards } from 'src/app/state/actions';
import { CutDeckDialogComponent } from './cut-deck-dialog/cut-deck-dialog.component';
import { WaitingForPlayersDialogComponent } from './waiting-for-players-dialog/waiting-for-players-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class GameDialogsService {

  constructor(private _matDialog: MatDialog, private _store: Store<any>) { }

  openAcceptTrumpDialog(): MatDialogRef<AcceptTrumpDialogComponent> {
    this._store.dispatch(toggleElevateCards());
    return this._matDialog.open(AcceptTrumpDialogComponent, {
      disableClose: true
    });
  }

  openCutDeckDialog(): MatDialogRef<CutDeckDialogComponent> {
    this._store.dispatch(toggleElevateCards());
    return this._matDialog.open(CutDeckDialogComponent, {
      disableClose: true
    });
  }

  openWaitingForPlayersDialog(): MatDialogRef<WaitingForPlayersDialogComponent> {
    this._store.dispatch(toggleElevateCards());
    return this._matDialog.open(WaitingForPlayersDialogComponent, {
      disableClose: true
    });
  }
}
