import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { playerEnteredGame } from 'src/app/state/actions';

@Component({
  selector: 'app-join-game-dialog',
  templateUrl: './join-game-dialog.component.html',
  styleUrls: ['./join-game-dialog.component.css'],
})
export class JoinGameDialogComponent {
  name = '';

  constructor(
    private _dialogRef: MatDialogRef<JoinGameDialogComponent>,
    private _store: Store<any>
  ) {}

  onClickEnterGame() {
    this._store.dispatch(
      playerEnteredGame({
        payload: {
          name: this.name,
        },
      })
    );
    this._dialogRef.close();
  }
}
