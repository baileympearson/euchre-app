import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSetupComponent } from './game-setup/game-setup.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [GameSetupComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatRadioModule
  ]
})
export class GameSetupModule { }
