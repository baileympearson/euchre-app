import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardToCardNamePipe } from './pipes/card-to-card-name/card-to-card-name.pipe';
import { CardToAssetPipe } from './pipes/card-to-asset/card-to-asset.pipe';



@NgModule({
  declarations: [CardToAssetPipe, CardToCardNamePipe],
  imports: [
    CommonModule
  ],
  exports: [CardToAssetPipe, CardToCardNamePipe]
})
export class SharedModule { }
