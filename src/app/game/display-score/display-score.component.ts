import { Component } from '@angular/core';

import { scoreToDisplay } from '../operators/score-to-display';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import {
  selectGameScore,
  selectHandScore,
  selectTeamPlayers,
} from 'src/app/state/selectors';
import { pluck, mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-display-score',
  templateUrl: './display-score.component.html',
  styleUrls: ['./display-score.component.css'],
})
export class DisplayScoreComponent {
  teamBTricks = this._store
    .select(selectHandScore)
    .pipe(pluck('teamB'), scoreToDisplay);
  teamATricks = this._store.select(selectHandScore).pipe(
    pluck('teamA'),
    scoreToDisplay,
    map((value) => [...value].reverse())
  );

  teamAScore = this._store.select(selectGameScore).pipe(pluck('teamA'));
  teamBScore = this._store.select(selectGameScore).pipe(pluck('teamB'));

  teamAPlayers = this._store.select(selectTeamPlayers).pipe(pluck('teamA'));
  teamBPlayers = this._store.select(selectTeamPlayers).pipe(pluck('teamB'));

  constructor(
    private _iconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
    private _store: Store<any>
  ) {
    this._iconRegistry.addSvgIcon(
      'filled',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/filled-circle-24px.svg'
      )
    );
    this._iconRegistry.addSvgIcon(
      'empty',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/empty-circle-24px.svg'
      )
    );
  }

  getColor(scoreStatus: 'filled' | 'empty'): 'primary' | 'secondary' {
    return scoreStatus === 'filled' ? 'primary' : 'secondary';
  }
}
