import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandViewContainerComponent } from './hand-view-container/hand-view-container.component';
import { CardToAssetPipe } from '../pipes/card-to-asset/card-to-asset.pipe';
import { SelectCardComponent } from './select-card/select-card.component';



@NgModule({
  declarations: [HandViewContainerComponent, SelectCardComponent],
  imports: [
    CommonModule,
  ],
  exports: [HandViewContainerComponent, SelectCardComponent]
})
export class SharedComponentsModule { }
