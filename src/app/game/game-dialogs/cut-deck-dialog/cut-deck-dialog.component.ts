import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cut-deck-dialog',
  templateUrl: './cut-deck-dialog.component.html',
  styleUrls: ['./cut-deck-dialog.component.css']
})
export class CutDeckDialogComponent {
  min = 0;
  max = 23;
  step = 1;
  value = 0;
  thumbLabel = false;

  constructor(private _dialogRef: MatDialogRef<CutDeckDialogComponent>) { }

  closeCutDeckDialog() {
    console.log(this.value)
    this._dialogRef.close();
  }

  handleSlider(event) {
    console.log(event);
  }
}
