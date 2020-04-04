import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.css']
})
export class GameDisplayComponent implements OnInit {

  cards = of([
    { value: '9', suit: 'clubs'},
    { value: 'jack', suit: 'hearts'},
    { value: '10', suit: 'spades'},
    { value: 'king', suit: 'hearts'},
    { value: 'queen', suit: 'diamonds'}
  ]);

  isCurrentPlayersTurn = of(true);

  constructor() { }

  ngOnInit(): void {
  }

}
