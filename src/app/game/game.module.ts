import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { DisplayScoreComponent } from './display-score/display-score.component';
import { MatIconModule } from '@angular/material/icon';
import { GameMessagesComponent } from './game-messages/game-messages.component';
import { SettingsIconComponent } from './settings-icon/settings-icon.component';
import { RoomNameLabelComponent } from './room-name-label/room-name-label.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GameDialogsModule } from './game-dialogs/game-dialogs.module';
import { GameDisplayComponent } from './game-display/game-display.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { KittyComponent } from './kitty/kitty.component';
import { CardsInPlayComponent } from './cards-in-play/cards-in-play.component';
import { TrumpIndicatorComponent } from './trump-indicator/trump-indicator.component';


@NgModule({
  declarations: [GameComponent, DisplayScoreComponent, GameMessagesComponent, SettingsIconComponent, RoomNameLabelComponent, GameDisplayComponent, KittyComponent, CardsInPlayComponent, TrumpIndicatorComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    GameDialogsModule,
    SharedComponentsModule
  ],
  exports: [ GameComponent ]
})
export class GameModule { }
