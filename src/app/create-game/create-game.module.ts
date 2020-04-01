import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CreateGameWrapperComponent } from './create-game-wrapper/create-game-wrapper.component';



@NgModule({
  declarations: [CreateGameWrapperComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [CreateGameWrapperComponent]
})
export class CreateGameModule { }
