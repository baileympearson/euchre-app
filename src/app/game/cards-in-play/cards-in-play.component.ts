import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { PlayerDisplayFacadeService } from '../game-display/player-display-facade.service';
import { selectActiveCardForOrientation } from 'src/app/state/derived-selectors';
import { Card } from 'src/app/shared/models/card';

function cardToAsset(obs: Observable<Card | undefined>) {
  return obs.pipe(
    map((card) =>
      !!card ? `assets/cards/${card.value}_of_${card.suit}.png` : undefined
    )
  );
}

@Component({
  selector: 'app-cards-in-play',
  templateUrl: './cards-in-play.component.html',
  styleUrls: ['./cards-in-play.component.css'],
})
export class CardsInPlayComponent {
  southCard = this._store.pipe(
    select(selectActiveCardForOrientation('south')),
    cardToAsset
  );
  northCard = this._store.pipe(
    select(selectActiveCardForOrientation('north')),
    cardToAsset
  );
  eastCard = this._store.pipe(
    select(selectActiveCardForOrientation('east')),
    cardToAsset
  );
  westCard = this._store.pipe(
    select(selectActiveCardForOrientation('west')),
    cardToAsset
  );

  constructor(private _store: Store<any>) {}
}
