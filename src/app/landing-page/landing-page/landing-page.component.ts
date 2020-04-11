import { Component } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  cards = of([
    { value: '9', suit: 'clubs' },
    { value: 'jack', suit: 'hearts' },
    { value: '10', suit: 'spades' },
    { value: 'king', suit: 'hearts' },
    { value: 'queen', suit: 'diamonds' },
  ]);

  constructor(private _router: Router) { }

  onClickCreateGame() {
    this._router.navigate(['/creategame']);
  }

  onClickJoinGame() {
    this._router.navigate(['/joingame']);
  }
}
