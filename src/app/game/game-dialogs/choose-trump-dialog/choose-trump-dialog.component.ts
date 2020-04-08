import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Suit } from 'src/app/shared/models/suit';

@Component({
  selector: 'app-choose-trump-dialog',
  templateUrl: './choose-trump-dialog.component.html',
  styleUrls: ['./choose-trump-dialog.component.css']
})
export class ChooseTrumpDialogComponent {

  suits = of(['clubs', 'spades','hearts']);


  constructor(private _dialogRef: MatDialogRef<ChooseTrumpDialogComponent>) { }

  onClickPassTrump() {
    // dispatch action here

    this._dialogRef.close();
  }

  onClickChooseTrump(suit: Suit) {
    // somehow find trump suit

    alert(suit);

    this._dialogRef.close();
  }
}
