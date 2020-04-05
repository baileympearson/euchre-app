import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandViewContainerComponent } from './hand-view-container/hand-view-container.component';
import { CardToAssetPipe } from '../pipes/card-to-asset/card-to-asset.pipe';
import { SelectCardComponent } from './select-card/select-card.component';
import { VerticalHandViewContainerComponent } from './vertical-hand-view-container/vertical-hand-view-container.component';



@NgModule({
  declarations: [HandViewContainerComponent, SelectCardComponent, VerticalHandViewContainerComponent],
  imports: [
    CommonModule,
  ],
  exports: [HandViewContainerComponent, SelectCardComponent, VerticalHandViewContainerComponent]
})
export class SharedComponentsModule { }
