import { Component, OnInit } from '@angular/core';
import { StoreState } from './state/reducers';
import { Store } from '@ngrx/store';
import { appLoaded } from './state/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'BaileyEuchre';

  constructor(private _store: Store<StoreState>) {}

  ngOnInit() {
    this._store.dispatch(appLoaded());
  }
}
