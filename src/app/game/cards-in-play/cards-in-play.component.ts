import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-cards-in-play',
  templateUrl: './cards-in-play.component.html',
  styleUrls: ['./cards-in-play.component.css']
})
export class CardsInPlayComponent {
  // southCard = of([ { value: '10', suit: 'clubs' }]);
  northCard = of([ { value: '10', suit: 'clubs' }]);
  westCard = of([ { value: '10', suit: 'clubs' }]);
  eastCard = of([ { value: '10', suit: 'clubs' }]);
  southCard = of([ { value: '10', suit: 'clubs' }]).pipe(
    filter(kitty => !!kitty),
    map(kitty => `assets/cards/${kitty[0].value}_of_${kitty[0].suit}.png`)
  );

  constructor(private _store: Store<any>) { }
}
