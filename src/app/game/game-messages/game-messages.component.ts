import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectUserMessage } from 'src/app/state/database-state/database-state.selectors';
import { selectGameMessage } from 'src/app/state/derived-selectors';

@Component({
  selector: 'app-game-messages',
  templateUrl: './game-messages.component.html',
  styleUrls: ['./game-messages.component.css']
})
export class GameMessagesComponent {

  message = this._store.pipe(select(selectGameMessage));

  constructor(private _store: Store<any>) { }
}
