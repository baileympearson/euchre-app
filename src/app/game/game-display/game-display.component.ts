import { Component, OnInit } from "@angular/core";
import { of, Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { selectCurrentDealer, selectIsCurrentPlayerActive, selectGameState } from "src/app/state/selectors";
import { tap, map } from "rxjs/operators";

@Component({
  selector: "app-game-display",
  templateUrl: "./game-display.component.html",
  styleUrls: ["./game-display.component.css"],
})
export class GameDisplayComponent {
  dealer = this._store.pipe(select(selectCurrentDealer));
  gameStatus = this._store.pipe(select(selectGameState));

  cards = of([
    { value: "9", suit: "clubs" },
    { value: "jack", suit: "hearts" },
    { value: "10", suit: "spades" },
    { value: "king", suit: "hearts" },
    { value: "queen", suit: "diamonds" },
  ]);

  isCurrentPlayersTurn = this._store.pipe(
    select(selectIsCurrentPlayerActive)
  );

  constructor(private _store: Store<any>) {}

  isPlayerDealer(player: string) {
    return this.dealer.pipe(
      map(
        (dealer) => player.toLowerCase().trim() === dealer.toLowerCase().trim()
      )
    );
  }

  formatPlayerName(playerName: string) {
    return this.dealer.pipe(
      map((dealer) => {
        return playerName.toLowerCase().trim() === dealer.toLowerCase().trim()
          ? `${playerName} (Dealer)`
          : `${playerName}`;
      })
    );
  }
  
  get isGameStateChoosingTrump(): Observable<boolean> {
    return this.gameStatus.pipe(
      map(gameStatus => 
        gameStatus === 'player discarding'
      )
    );
  }

  get isGameStatePlaying(): Observable<boolean> {
    return this.gameStatus.pipe(
      map(gameStatus => 
        gameStatus === 'player playing'
      )
    );
  }
}
