import { Component, OnInit } from "@angular/core";
import { of, Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { tap, map, withLatestFrom } from "rxjs/operators";
import { selectCurrentDealer, selectGameStatus, isUserActivePlayer, selectPlayersHands } from 'src/app/state/database-state/database-state.selectors';
import { selectPlayerKey } from 'src/app/state/client-state/client-state.selectors';
import { Card } from 'src/app/shared/models/card';
import { PlayerDisplayFacadeService } from './player-display-facade.service';
import { selectHandForOrientation, selectNameForOrientation, selectActiveCardForOrientation } from 'src/app/state/derived-selectors';


function undefinedToString(obs: Observable<string | undefined>) {
  return obs.pipe(
    map(
      value => !!value ? value : ''
    )
  );
}

@Component({
  selector: "app-game-display",
  templateUrl: "./game-display.component.html",
  styleUrls: ["./game-display.component.css"],
})
export class GameDisplayComponent {
  dealer = this._store.pipe(select(selectCurrentDealer));
  gameStatus = this._store.pipe(select(selectGameStatus));
  cardsInHands = this._store.pipe(select(selectPlayersHands));

  southCards = this._store.pipe(select(selectHandForOrientation('south')));
  northCards = this._store.pipe(select(selectHandForOrientation('north')));
  eastCards = this._store.pipe(select(selectHandForOrientation('east')));
  westCards = this._store.pipe(select(selectHandForOrientation('west')));

  southName = this._store.pipe(select(selectNameForOrientation('south')), undefinedToString);
  northName = this._store.pipe(select(selectNameForOrientation('north')), undefinedToString);
  eastName = this._store.pipe(select(selectNameForOrientation('east')), undefinedToString);
  westName = this._store.pipe(select(selectNameForOrientation('west')), undefinedToString);

  // isCurrentPlayersTurn = this._store.pipe(
  //   select(isUserActivePlayer)
  // );
  isCurrentPlayersTurn = of(true);

  constructor(private _store: Store<any>, displayFacadeService: PlayerDisplayFacadeService) {}

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
        gameStatus === 'choosing trump'
      )
    );
  }

  get isGameStatePlaying(): Observable<boolean> {
    return this.gameStatus.pipe(
      map(gameStatus => 
        gameStatus === 'playing hand'
      )
    );
  }

  get cardsForUser(): Observable<Card[]> {
    return this.cardsInHands.pipe(
      withLatestFrom(
        this._store.pipe(select(selectPlayerKey))
      ),
      map(([hands, playerKey]) => {
        return hands[playerKey];
      })
    );
  }
}
