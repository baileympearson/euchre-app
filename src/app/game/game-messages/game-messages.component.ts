import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectUserAction } from 'src/app/state/selectors';

@Component({
  selector: 'app-game-messages',
  templateUrl: './game-messages.component.html',
  styleUrls: ['./game-messages.component.css']
})
export class GameMessagesComponent {

  message = this._store.pipe(select(selectUserAction));

  constructor(private _store: Store<any>) { }
}
