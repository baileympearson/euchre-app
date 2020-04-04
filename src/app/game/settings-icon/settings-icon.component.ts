import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { GameDialogsService } from '../game-dialogs/game-dialog.service';

@Component({
  selector: 'app-settings-icon',
  templateUrl: './settings-icon.component.html',
  styleUrls: ['./settings-icon.component.css'],
})
export class SettingsIconComponent {
  constructor(
    private _iconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
    private _gameDialogService: GameDialogsService
  ) {
    this._iconRegistry.addSvgIcon(
      'settings-icon',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/settings-24px.svg'
      )
    );
  }

  launchSettingsDialog() {
    this._gameDialogService.openAcceptTrumpDialog();
  }
}
