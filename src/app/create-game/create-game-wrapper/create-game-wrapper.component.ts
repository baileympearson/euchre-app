import { Component } from '@angular/core';

type GameWrapperState = 'join game' | 'create game';

@Component({
  selector: 'app-create-game-wrapper',
  templateUrl: './create-game-wrapper.component.html',
  styleUrls: ['./create-game-wrapper.component.css']
})
export class CreateGameWrapperComponent {
  gameWrapperState: GameWrapperState = 'create game';

  toggleState() {
    this.gameWrapperState = this.gameWrapperState === 'create game' ? 'join game' : 'create game';
  }

  isJoinGameScreen() {
    return this.gameWrapperState === 'join game';
  }

  isCreateGameScreen() {
    return this.gameWrapperState === 'create game';
  }
}
