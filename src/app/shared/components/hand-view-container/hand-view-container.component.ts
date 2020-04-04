import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Card } from "../../models/card";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-hand-view-container",
  templateUrl: "./hand-view-container.component.html",
  styleUrls: ["./hand-view-container.component.css"],
})
export class HandViewContainerComponent implements OnInit {
  @Input() cards: Observable<Card[]>;
  @Input() showFaceDown = false;

  cardsToDisplay: Observable<string[]>;
  ngOnInit() {
    this.cardsToDisplay = this.cards.pipe(
      tap(vals => console.log(vals)),
      map((values) => {
        return values.map((card) => `assets/cards/${card.value}_of_${card.suit}.png`);
      })
    );
  }
}
