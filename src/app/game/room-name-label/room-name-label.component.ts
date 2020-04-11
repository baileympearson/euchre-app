import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectGameName } from 'src/app/state/database-state/database-state.selectors';

@Component({
  selector: 'app-room-name-label',
  templateUrl: './room-name-label.component.html',
  styleUrls: ['./room-name-label.component.css']
})
export class RoomNameLabelComponent {

  roomName = this._store.pipe(select(selectGameName));

  constructor(private _store: Store<any>) {

  }
}
