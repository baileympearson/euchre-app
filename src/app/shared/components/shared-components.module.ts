import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandViewContainerComponent } from './hand-view-container/hand-view-container.component';



@NgModule({
  declarations: [HandViewContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [HandViewContainerComponent]
})
export class SharedComponentsModule { }
