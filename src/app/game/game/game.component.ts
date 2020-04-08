import { Component, OnInit } from "@angular/core";
import { GameDialogsService } from "../game-dialogs/game-dialog.service";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit {
  constructor(private _gameDialogService: GameDialogsService) {}

  ngOnInit() {
    of(true)
      .pipe(delay(1500))
      .subscribe(() =>
        this._gameDialogService
          .openJoinGameDialog()
          .afterClosed()
          .pipe(delay(1500))
          .subscribe(() =>
            this._gameDialogService.openWaitingForPlayersDialog()
          )
      );
    //  of(true)
    //       .pipe(delay(1500))
    //       .subscribe(() =>
    //             this._gameDialogService.openWaitingForPlayersDialog()
    //       );
    //   }
  }
}
