import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-settings-icon',
  templateUrl: './settings-icon.component.html',
  styleUrls: ['./settings-icon.component.css']
})
export class SettingsIconComponent {

  constructor(private _iconRegistry: MatIconRegistry, private _sanitizer: DomSanitizer) {
this._iconRegistry.addSvgIcon(
      'settings-icon',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/settings-24px.svg'
      )
    );
   }

   launchSettingsDialog() {
     alert('settings dialog is launched');
   }
}
