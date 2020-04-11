import { Component, OnInit } from "@angular/core";
import { GameDialogsService } from "../game-dialogs/game-dialog.service";
import { of } from "rxjs";
import { delay, map } from "rxjs/operators";
import { Store, select } from '@ngrx/store';
import { selectGameStatus } from 'src/app/state/database-state/database-state.selectors';
import { isGameActive } from 'src/app/state/derived-selectors';

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit {
  isGameActive = this._store.pipe(select(isGameActive));

  constructor(private _gameDialogService: GameDialogsService, private _store: Store<any>) {}

  ngOnInit() {
    // of(true)
    //   .pipe(delay(1500))
    //   .subscribe(() =>
    //     this._gameDialogService
    //       .openJoinGameDialog()
    //       .afterClosed()
    //       .pipe(delay(1500))
    //       .subscribe(() =>
    //         this._gameDialogService.openWaitingForPlayersDialog()
    //       )
    //   );
    //  of(true)
    //       .pipe(delay(1500))
    //       .subscribe(() =>
    //             this._gameDialogService.openWaitingForPlayersDialog()
    //       );
    //   }
  }

  // maybe check if the number of players in the game is 4? 
  haveAllPlayersJoined() {
    return true;
  }

  haveTeamsBeenChosen() {
    return true;
  }
}
