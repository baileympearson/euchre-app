import { Component } from '@angular/core';

import { scoreToDisplay } from '../operators/score-to-display';
import { Store } from '@ngrx/store';
;
import { pluck, mergeMap, map } from 'rxjs/operators';
import { selectHandScores, selectTeamPlayers, selectGameScores } from 'src/app/state/database-state/database-state.selectors';

@Component({
  selector: 'app-display-score',
  templateUrl: './display-score.component.html',
  styleUrls: ['./display-score.component.css'],
})
export class DisplayScoreComponent {
  teamBTricks = this._store
    .select(selectHandScores)
    .pipe(pluck('teamB'), scoreToDisplay);
  teamATricks = this._store.select(selectHandScores).pipe(
    pluck('teamA'),
    scoreToDisplay,
    map((value) => [...value].reverse())
  );

  teamAScore = this._store.select(selectGameScores).pipe(pluck('teamA'));
  teamBScore = this._store.select(selectGameScores).pipe(pluck('teamB'));

  teamAPlayers = this._store.select(selectTeamPlayers).pipe(pluck('teamA'));
  teamBPlayers = this._store.select(selectTeamPlayers).pipe(pluck('teamB'));

  constructor(private _store: Store<any>) {}

  getColor(scoreStatus: 'filled' | 'empty'): 'primary' | 'secondary' {
    return scoreStatus === 'filled' ? 'primary' : 'secondary';
  }
}
