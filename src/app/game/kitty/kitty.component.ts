import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectTopOfKitty } from 'src/app/state/selectors';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-kitty',
  templateUrl: './kitty.component.html',
  styleUrls: ['./kitty.component.css']
})
export class KittyComponent {
  kitty = this._store.pipe(select(selectTopOfKitty)).pipe(
    filter(kitty => !!kitty),
    map(kitty => `assets/cards/${kitty[0].value}_of_${kitty[0].suit}.png`)
  );

  constructor(private _store: Store<any>) {}
}
