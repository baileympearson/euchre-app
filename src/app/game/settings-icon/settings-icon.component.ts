import { Component } from '@angular/core';
import { GameDialogsService } from '../game-dialogs/game-dialog.service';

@Component({
  selector: 'app-settings-icon',
  templateUrl: './settings-icon.component.html',
  styleUrls: ['./settings-icon.component.css'],
})
export class SettingsIconComponent {
  constructor(private _gameDialogService: GameDialogsService) {}

  launchSettingsDialog() {
    this._gameDialogService.openWaitingForPlayersDialog();
  }
}
