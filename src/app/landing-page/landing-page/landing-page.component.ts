import { Component, OnInit } from '@angular/core';
import { landingPageRoute } from 'src/app/shared/constants/routing-constants';

type LandingPageState = 'login' | 'register';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  landingPageState: LandingPageState = 'login';

  constructor() { }

  toggleState() {
    this.landingPageState = this.landingPageState === 'login' ? 'register' : 'login';
    console.log(this.landingPageState);
  }
}
