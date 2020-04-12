import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Suit } from 'src/app/shared/models/suit';
import { Store, select } from '@ngrx/store';
import {
  chooseTrumpDialogTrumpChosen,
  chooseTrumpDialogTrumpPassed,
} from 'src/app/state/actions';
import { selectTopOfKitty } from 'src/app/state/database-state/database-state.selectors';
import { Card } from 'src/app/shared/models/card';
import { map } from 'rxjs/operators';
import { isUserDealer } from 'src/app/state/derived-selectors';

@Component({
  selector: 'app-choose-trump-dialog',
  templateUrl: './choose-trump-dialog.component.html',
  styleUrls: ['./choose-trump-dialog.component.css'],
})
export class ChooseTrumpDialogComponent {
  suits = this._store.pipe(
    select(selectTopOfKitty),
    map((kitty: Card) => {
      return ['hearts', 'clubs', 'spades', 'diamonds'].filter(
        (suit) => suit !== kitty.suit
      );
    })
  );

  isDealerScrewed = this._store.pipe(
    select(isUserDealer)
  );

  constructor(
    private _dialogRef: MatDialogRef<ChooseTrumpDialogComponent>,
    private _store: Store<any>
  ) {}

  onClickPassTrump() {
    this._store.dispatch(chooseTrumpDialogTrumpPassed());
    this._dialogRef.close();
  }

  onClickChooseTrump(suit: Suit) {
    this._store.dispatch(chooseTrumpDialogTrumpChosen({ payload: { suit } }));
    this._dialogRef.close();
  }
}
