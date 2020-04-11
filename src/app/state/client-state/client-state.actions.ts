import { createAction } from '@ngrx/store';

export const elevateCardsInHand = createAction('[] Set elevateCards to true');
export const unElevateCardsInHand = createAction('[] Set elevateCards to false');
