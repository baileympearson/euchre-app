import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-join-game-dialog',
  templateUrl: './join-game-dialog.component.html',
  styleUrls: ['./join-game-dialog.component.css']
})
export class JoinGameDialogComponent  {

  constructor(private _dialogRef: MatDialogRef<JoinGameDialogComponent>) { }

  onClickEnterGame() {
    console.log('entering game');
    this._dialogRef.close();
  }

}
