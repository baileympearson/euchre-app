import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { DisplayScoreComponent } from './display-score/display-score.component';
import { MatIconModule } from '@angular/material/icon';
import { GameMessagesComponent } from './game-messages/game-messages.component';
import { SettingsIconComponent } from './settings-icon/settings-icon.component';
import { RoomNameLabelComponent } from './room-name-label/room-name-label.component';


@NgModule({
  declarations: [GameComponent, DisplayScoreComponent, GameMessagesComponent, SettingsIconComponent, RoomNameLabelComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [ GameComponent ]
})
export class GameModule { }
