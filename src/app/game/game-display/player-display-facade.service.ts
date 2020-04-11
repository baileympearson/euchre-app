import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import {
  selectCurrentDealer,
  selectGameStatus,
  selectPlayersHands,
  selectPlayerOrdering,
  selectPlayers,
  selectCardsInPlay,
} from "src/app/state/database-state/database-state.selectors";
import { withLatestFrom, map, pluck } from "rxjs/operators";
import { selectPlayerKey } from "src/app/state/client-state/client-state.selectors";

@Injectable({
  providedIn: "root",
})
export class PlayerDisplayFacadeService {
  dealer = this._store.pipe(select(selectCurrentDealer));
  gameStatus = this._store.pipe(select(selectGameStatus));
  cardsInHands = this._store.pipe(select(selectPlayersHands));
  playersInGame = this._store.pipe(select(selectPlayers));
  cardsInPlay = this._store.pipe(select(selectCardsInPlay));

  playerOrientations = this._store.pipe(
    select(selectPlayerOrdering),
    withLatestFrom(this._store.pipe(select(selectPlayerKey))),
    map(([playerOrdering, playerKey]) => {
      const indexOfPlayer = playerOrdering.findIndex(
        (key) => key === playerKey
      );

      return {
        south: playerOrdering[indexOfPlayer],
        west: playerOrdering[(indexOfPlayer + 1) % 4],
        north: playerOrdering[(indexOfPlayer + 2) % 4],
        east: playerOrdering[(indexOfPlayer + 3) % 4],
      };
    })
  );

  constructor(private _store: Store<any>) {}

  getPlayerNameByOrientation(orientation: "north" | "south" | "east" | "west") {
    return this.playerOrientations.pipe(
      pluck(orientation),
      withLatestFrom(this.playersInGame),
      map(([playerKey, playersInGame]) => playersInGame[playerKey])
    );
  }

  getPlayerHandByOrientation(orientation: "north" | "south" | "east" | "west") {
    return this.playerOrientations.pipe(
      pluck(orientation),
      withLatestFrom(this.cardsInHands),
      map(([playerKey, playersHands]) => playersHands[playerKey])
    );
  }

  getCardsInPlayByOrientation(orientation: "north" | "south" | "east" | "west") {
    return this.playerOrientations.pipe(
      pluck(orientation),
      withLatestFrom(this.cardsInPlay),
      map(([playerKey, cardsInPlay]) => cardsInPlay[playerKey])
    );
  }
}
