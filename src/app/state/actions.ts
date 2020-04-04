import { createAction } from '@ngrx/store';


export const appLoaded = createAction('[App Component] App loaded && ngrx works!');

export const trumpSuitAccepted = createAction('[Accept Trump Dialog] Trump Suit Accepted');
export const trumpSuitPassed = createAction('[Accept Trump Dialog] Trump Suit Not Chosen');

export const toggleElevateCards = createAction('[Dialog Opened] Toggle Cards Z Index');