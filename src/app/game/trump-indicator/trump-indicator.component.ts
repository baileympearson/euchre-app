import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { selectTrumpSuit } from 'src/app/state/database-state/database-state.selectors';

@Component({
  selector: 'app-trump-indicator',
  templateUrl: './trump-indicator.component.html',
  styleUrls: ['./trump-indicator.component.css'],
})
export class TrumpIndicatorComponent {
  trumpSuit = this._store.pipe(select(selectTrumpSuit));

  constructor(private _store: Store<any>) {}

  isSelectedTrumpSuit(suit: string) {
    return this.trumpSuit.pipe(map((trumpSuit) => trumpSuit === suit));
  }
}
