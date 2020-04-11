import { createReducer, on, Action } from '@ngrx/store';
import { GameStatus } from 'src/app/shared/models/game-status';
import { Suit } from 'src/app/shared/models/suit';
import { Card } from 'src/app/shared/models/card';
import { PlayerKey } from 'src/app/shared/models/player-key';

export interface DBState {
  teams: {
    teamA: {
      player1: string,
      player2: string
    }
    teamB: {
      player1: string,
      player2: string
    }
  };
  scores: {
    teamATricks: number;
    teamBTricks: number;
    teamAScore: number;
    teamBScore: number;
  };
  players: {
    player1: string;
    player2: string;
    player3: string;
    player4: string;
  };
  playerOrdering: PlayerKey[];   // fixed: must ONLY be changed when dealer chooses teams!!
  kitty: Card[];
  cardsInPlay: {
    player1: Card | undefined,
    player2: Card | undefined,
    player3: Card | undefined,
    player4: Card | undefined
  };
  hands: {
    player1: Card[],
    player2: Card[],
    player3: Card[],
    player4: Card[]
  };
  actionMessage: string;
  currentActivePlayer: string;
  teamChooseTrump: 'teamA' | 'teamB' | '';
  currentDealer: PlayerKey;
  gameHost: PlayerKey;
  gameStatus: GameStatus;
  trumpSuit: Suit | undefined;
  gameName: string;
}

const initialState: DBState = {
  teams: {
    teamA: {
      player1: '',
      player2: ''
    },
    teamB: {
      player1: '',
      player2: ''
    },
  },
  scores: {
    teamATricks: 0,
    teamBTricks: 0,
    teamAScore: 0,
    teamBScore: 0,
  },
  players: {
    player1: 'bailey',
    player2: 'joe',
    player3: 'jordyn',
    player4: 'nate'
  },
  playerOrdering: ['player3', 'player2', 'player4', 'player1'],
  kitty: [{ suit: 'spades', value: '9' }],
  cardsInPlay: {
    player1: { suit: 'diamonds', value: '10'},
    player2: { suit: 'clubs', value: '10'},
    player3: { suit: 'spades', value: '10'},
    player4: { suit: 'hearts', value: '10'},
  },
  hands: {
    player1: [ {
      suit: 'clubs', value: 'jack'
    }],
    player2: [
      {  suit: 'clubs', value: 'jack' },
      {  suit: 'clubs', value: 'jack' },
      {  suit: 'clubs', value: 'jack' },
      {  suit: 'clubs', value: 'jack' },
      {  suit: 'clubs', value: 'jack' }
    ],
    player3: [],
    player4: []
  },
  actionMessage: 'Select a card to play',
  currentActivePlayer: '',
  currentDealer: 'player1',
  teamChooseTrump: '',
  gameHost: 'player1',
  gameStatus: 'playing hand',
  trumpSuit: undefined,
  gameName: '',
};

const reducer = createReducer(
  initialState,
);

export function dbStateReducer(state: DBState | undefined, action: Action) {
  return reducer(state, action);
}
