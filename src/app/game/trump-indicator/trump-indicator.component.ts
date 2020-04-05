import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Store, select } from '@ngrx/store';
import { selectTrumpSuit } from 'src/app/state/selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-trump-indicator',
  templateUrl: './trump-indicator.component.html',
  styleUrls: ['./trump-indicator.component.css'],
})
export class TrumpIndicatorComponent {
  trumpSuit = this._store.pipe(select(selectTrumpSuit))
  constructor(
    private _iconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
    private _store: Store<any>
  ) {
    this._iconRegistry.addSvgIcon(
      'clubs-icon',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/clubs.svg'
      )
    );
    this._iconRegistry.addSvgIcon(
      'diamonds-icon',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/diamonds.svg'
      )
    );
    this._iconRegistry.addSvgIcon(
      'hearts-icon',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/hearts.svg'
      )
    );
    this._iconRegistry.addSvgIcon(
      'spades-icon',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/spades.svg'
      )
    );
  }

  isSelectedTrumpSuit(suit: string) {
    return this.trumpSuit.pipe(
      map(trumpSuit => trumpSuit === suit)
    );
  }
}
