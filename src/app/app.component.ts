import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appLoaded } from './state/actions';
import { IconRegistryService } from './shared/services/icon-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'BaileyEuchre';

  constructor(private _store: Store<any>, private _iconRegistryService: IconRegistryService) {}

  ngOnInit() {
    this._store.dispatch(appLoaded());
  }
}
