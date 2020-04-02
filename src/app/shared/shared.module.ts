import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardToCardNamePipe } from './pipes/card-to-card-name/card-to-card-name.pipe';
import { CardToAssetPipe } from './pipes/card-to-asset/card-to-asset.pipe';
import { SharedComponentsModule } from './components/shared-components.module';



@NgModule({
  declarations: [CardToAssetPipe, CardToCardNamePipe],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [CardToAssetPipe, CardToCardNamePipe]
})
export class SharedModule { }
