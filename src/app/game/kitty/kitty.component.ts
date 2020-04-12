import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, filter, tap } from 'rxjs/operators';
import { selectTopOfKitty } from 'src/app/state/database-state/database-state.selectors';
import { Card } from 'src/app/shared/models/card';

@Component({
  selector: 'app-kitty',
  templateUrl: './kitty.component.html',
  styleUrls: ['./kitty.component.css']
})
export class KittyComponent {
  kitty = this._store.pipe(select(selectTopOfKitty)).pipe(
    tap(value => console.log(value)),
    filter(kitty => !!kitty),
    map((kitty: Card) => `assets/cards/${kitty.value}_of_${kitty.suit}.png`)
  );

  constructor(private _store: Store<any>) {}
}
