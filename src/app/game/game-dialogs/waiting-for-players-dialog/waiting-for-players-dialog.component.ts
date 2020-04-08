import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectGameName } from 'src/app/state/selectors';
import { take } from 'rxjs/operators';
import { of } from 'rxjs';
import { Player } from 'src/app/shared/models/player';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-waiting-for-players-dialog',
  templateUrl: './waiting-for-players-dialog.component.html',
  styleUrls: ['./waiting-for-players-dialog.component.css'],
})
export class WaitingForPlayersDialogComponent {
  waitingForPlayers = of(false);
  isHost = of(false);
  potentialPartnerNames = of(['keaton', 'joe', 'jordyn']);
  _roomName = '';
  roomName = this._store.pipe(select(selectGameName));

  constructor(private _store: Store<any>, private _dialogRef: MatDialogRef<WaitingForPlayersDialogComponent>) {
    this._store
      .pipe(select(selectGameName))
      .pipe(take(1))
      .subscribe((roomName) => {
        this._roomName = roomName;
      });
  }

  copyGameLinkToClipboard(): string {
    return `${window.location.origin}/game/${this._roomName}`;
  }

  choosePartner(player: Player) {
    this._dialogRef.close();
  }
}
