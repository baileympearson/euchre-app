import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-create-game-form',
  templateUrl: './create-game-form.component.html',
  styleUrls: ['./create-game-form.component.css']
})
export class CreateGameFormComponent {
  @Input() initialGameName = '';

  constructor() { }
}
