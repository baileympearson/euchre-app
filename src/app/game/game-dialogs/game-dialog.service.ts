import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AcceptTrumpDialogComponent } from './accept-trump-dialog/accept-trump-dialog.component';
import { Store } from '@ngrx/store';
import { toggleElevateCards } from 'src/app/state/actions';

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
}
