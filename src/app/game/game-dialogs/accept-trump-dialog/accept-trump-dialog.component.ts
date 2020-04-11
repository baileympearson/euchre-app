import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { trumpSuitPassed, trumpSuitAccepted } from 'src/app/state/actions';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { selectTopOfKitty, selectCurrentDealer } from 'src/app/state/database-state/database-state.selectors';

@Component({
  selector: 'app-accept-trump-dialog',
  templateUrl: './accept-trump-dialog.component.html',
  styleUrls: ['./accept-trump-dialog.component.css'],
})
export class AcceptTrumpDialogComponent {
  kitty = this._store.pipe(select(selectTopOfKitty));
  dealer = this._store.pipe(select(selectCurrentDealer));
  trumpSuit = this._store.pipe(
    select(selectTopOfKitty),
    map((topOfKitty) => topOfKitty[0].suit)
  );

  constructor(
    private _dialog: MatDialogRef<AcceptTrumpDialogComponent>,
    private _store: Store<any>,
    private _iconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer
  ) {
    this._iconRegistry.addSvgIcon(
      'error-icon',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/error-24px.svg'
      )
    );
  }

  closeDialog() {
    this._dialog.close();
  }

  onChooseNo() {
    this._store.dispatch(trumpSuitPassed());
    this.closeDialog();
  }

  onChooseYes() {
    this._store.dispatch(trumpSuitAccepted());
    this.closeDialog();
  }
}
