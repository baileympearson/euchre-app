import { createAction, props } from '@ngrx/store';
import { Suit } from '../shared/models/suit';


export const appLoaded = createAction('[App Component] App loaded && ngrx works!');

export const trumpSuitAccepted = createAction('[Accept Trump Dialog] Trump Suit Accepted');
export const trumpSuitPassed = createAction('[Accept Trump Dialog] Trump Suit Not Chosen');

export const chooseTrumpDialogTrumpChosen = createAction('[Choose Trump Dialog] Trump Suit Accepted', props<{payload: { suit: Suit }}>());
export const chooseTrumpDialogTrumpPassed = createAction('[Choose Trump Dialog] Trump Suit Not Chosen');

export const playerEnteredGame = createAction('[Join Game Dialog] Player Joined Game',
    props<{payload: { name: string }}>()
);

export const hostChoseTeammate = createAction('[Join Game Dialog] Host Chose Teammate',
    props<{payload: { partnerName: string }}>()
);

export const playerDealtCards = createAction('[Deal Cards Dialog] Player Dealt Cards');

export const databaseUpdateState = createAction('[Firebase DB] Game Update State');
