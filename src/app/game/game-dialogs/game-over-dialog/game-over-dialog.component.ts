import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { isOnWinningTeam } from 'src/app/state/derived-selectors';

@Component({
  selector: 'app-game-over-dialog',
  templateUrl: './game-over-dialog.component.html',
  styleUrls: ['./game-over-dialog.component.css']
})
export class GameOverDialogComponent {
  isOnWinningTeam = this._store.pipe(select(isOnWinningTeam))

  constructor(private _store: Store<any>) { }
}
