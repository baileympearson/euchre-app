import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptTrumpDialogComponent } from './accept-trump-dialog/accept-trump-dialog.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CutDeckDialogComponent } from './cut-deck-dialog/cut-deck-dialog.component';
import { MatSliderModule } from '@angular/material/slider';
import { WaitingForPlayersDialogComponent } from './waiting-for-players-dialog/waiting-for-players-dialog.component';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { JoinGameDialogComponent } from './join-game-dialog/join-game-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChooseTrumpDialogComponent } from './choose-trump-dialog/choose-trump-dialog.component';

@NgModule({
  declarations: [
    AcceptTrumpDialogComponent,
    CutDeckDialogComponent,
    WaitingForPlayersDialogComponent,
    JoinGameDialogComponent,
    ChooseTrumpDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    ClipboardModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class GameDialogsModule {}
