import { Component } from '@angular/core';
import { GameDialogsService } from '../game-dialogs/game-dialog.service';
import { Store } from '@ngrx/store';
import { playerDealtCards } from 'src/app/state/actions';

@Component({
  selector: 'app-settings-icon',
  templateUrl: './settings-icon.component.html',
  styleUrls: ['./settings-icon.component.css'],
})
export class SettingsIconComponent {
  constructor(private _gameDialogService: GameDialogsService, private _store: Store<any>) {
  }

  launchSettingsDialog() {
    // this._gameDialogService.openWaitingForPlayersDialog();
    this._store.dispatch(playerDealtCards());
  }
}
