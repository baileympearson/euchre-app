import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent {
  constructor(private _router: Router) { }

  createGame() {
    this._router.navigate(['/game/asdf']);
  }
}
