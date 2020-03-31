import { createReducer, on, Action } from '@ngrx/store';
import { appLoaded } from './actions';


export interface StoreState {
    gameName: string;
}

const initialState: StoreState = {
    gameName: '',
};

const reducer = createReducer(
    initialState,
    on(appLoaded, (state: StoreState) => {
        console.log('reducing');
        return { ...state, gameName: 'hello world' }
    })
);

export function appReducer(state: StoreState | undefined, action: Action) {
    return reducer(state, action);
}
