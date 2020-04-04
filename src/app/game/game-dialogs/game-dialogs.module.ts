import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptTrumpDialogComponent } from './accept-trump-dialog/accept-trump-dialog.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [AcceptTrumpDialogComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class GameDialogsModule { }
