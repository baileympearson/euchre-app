import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { landingPageRoute } from 'src/app/shared/constants/routing-constants';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private _router: Router) { }

  onClickLogo() {
    this._router.navigate([landingPageRoute]);
  }
}
