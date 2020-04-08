import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {

  constructor(
    private _iconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer
  ) { 
    this.initIcons();
  }

  initIcons() {
    this._iconRegistry.addSvgIcon(
      'filled',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/filled-circle-24px.svg'
      )
    );
    this._iconRegistry.addSvgIcon(
      'empty',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/empty-circle-24px.svg'
      )
    );
    this._iconRegistry.addSvgIcon(
      'settings-icon',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/settings-24px.svg'
      )
    );
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

    this._iconRegistry.addSvgIcon(
      'copy-to-clipboard',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/copy-to-clipboard.svg'
      )
    );
    this._iconRegistry.addSvgIcon(
      'sync-icon',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/sync-icon.svg'
      )
    );
    this._iconRegistry.addSvgIcon(
      'plus-icon',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svgs/add-icon.svg'
      )
    );
  }
}
