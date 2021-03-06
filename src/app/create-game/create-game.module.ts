import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CreateGameComponent } from './create-game/create-game.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';



@NgModule({
  declarations: [CreateGameComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SharedComponentsModule
  ],
  exports: [CreateGameComponent]
})
export class CreateGameModule { }
