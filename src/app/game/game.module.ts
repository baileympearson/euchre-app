import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { DisplayScoreComponent } from './display-score/display-score.component';



@NgModule({
  declarations: [GameComponent, DisplayScoreComponent],
  imports: [
    CommonModule
  ],
  exports: [ GameComponent ]
})
export class GameModule { }
