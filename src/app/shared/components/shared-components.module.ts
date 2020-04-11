import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandViewContainerComponent } from './hand-view-container/hand-view-container.component';
import { CardToAssetPipe } from '../pipes/card-to-asset/card-to-asset.pipe';
import { SelectCardComponent } from './select-card/select-card.component';
import { VerticalHandViewContainerComponent } from './vertical-hand-view-container/vertical-hand-view-container.component';
import { CreateGameFormComponent } from './create-game-form/create-game-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DealerIconComponent } from './dealer-icon/dealer-icon.component';



@NgModule({
  declarations: [HandViewContainerComponent, SelectCardComponent, VerticalHandViewContainerComponent, CreateGameFormComponent, DealerIconComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [HandViewContainerComponent, SelectCardComponent, VerticalHandViewContainerComponent, CreateGameFormComponent, DealerIconComponent]
})
export class SharedComponentsModule { }
