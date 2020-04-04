import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from '../../models/card';
import { map, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { selectElevateCards } from 'src/app/state/selectors';

@Component({
  selector: 'app-select-card',
  templateUrl: './select-card.component.html',
  styleUrls: ['./select-card.component.css']
})
export class SelectCardComponent implements OnInit {
  @Input() cards: Observable<Card[]>;
  cardsToDisplay: Observable<string[]>;
  elevateCards = this._store.pipe(select(selectElevateCards));
  private _cards = [];

  constructor(private _store: Store<any>) {}

  ngOnInit() {
    this.cardsToDisplay = this.cards.pipe(
      tap(cards => this._cards = cards),
      map((values) => {
        return values.map((card) => `assets/cards/${card.value}_of_${card.suit}.png`);
      })
    );
  }

  onSelectCard(index) {
    alert(JSON.stringify(this._cards[index]));
  }
}
