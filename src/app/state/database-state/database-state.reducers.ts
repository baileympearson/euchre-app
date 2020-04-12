import { createReducer, on, Action } from '@ngrx/store';
import { GameStatus } from 'src/app/shared/models/game-status';
import { Suit } from 'src/app/shared/models/suit';
import { Card } from 'src/app/shared/models/card';
import { PlayerKey } from 'src/app/shared/models/player-key';
import {
  playerEnteredGame,
  hostChoseTeammate,
  playerDealtCards,
  trumpSuitAccepted,
  chooseTrumpDialogTrumpChosen,
  trumpSuitPassed,
  chooseTrumpDialogTrumpPassed,
} from '../actions';
import { deal, getNextOpenPlayerKey } from 'src/app/game-logic/utils';

export interface DBState {
  teams: {
    teamA: {
      player1: PlayerKey;
      player2: PlayerKey;
    };
    teamB: {
      player1: PlayerKey;
      player2: PlayerKey;
    };
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
  playerOrdering: PlayerKey[]; // fixed: must ONLY be changed when dealer chooses teams!!
  kitty: Card[];
  cardsInPlay: {
    player1: Card | undefined;
    player2: Card | undefined;
    player3: Card | undefined;
    player4: Card | undefined;
  };
  hands: {
    player1: Card[];
    player2: Card[];
    player3: Card[];
    player4: Card[];
  };
  actionMessage: string;
  currentActivePlayer: PlayerKey;
  teamChoseTrump: 'teamA' | 'teamB' | '';
  currentDealer: PlayerKey;
  gameHost: PlayerKey;
  gameStatus: GameStatus;
  trumpSuit: Suit | undefined;
  gameName: string;
}

const initialState: DBState = {
  teams: {
    teamA: {
      player1: 'player1',
      player2: 'player3',
    },
    teamB: {
      player1: 'player4',
      player2: 'player2',
    },
  },
  scores: {
    teamATricks: 4,
    teamBTricks: 1,
    teamAScore: 3,
    teamBScore: 7,
  },
  players: {
    player1: 'bailey',
    player2: 'jordyn',
    player3: 'joe',
    player4: 'nate',
  },
  playerOrdering: ['player1', 'player2', 'player3', 'player4'],
  kitty: [{ suit: 'spades', value: '9' }],
  cardsInPlay: {
    player1: { suit: 'diamonds', value: '10' },
    player2: { suit: 'clubs', value: '10' },
    player3: { suit: 'spades', value: '10' },
    player4: { suit: 'hearts', value: '10' },
  },
  hands: {
    player1: [
      {
        suit: 'clubs',
        value: 'jack',
      },
      {
        suit: 'clubs',
        value: 'jack',
      },
      {
        suit: 'clubs',
        value: 'jack',
      },
      {
        suit: 'clubs',
        value: 'jack',
      },
      {
        suit: 'clubs',
        value: 'jack',
      },
    ],
    player2: [
      { suit: 'clubs', value: 'jack' },
      { suit: 'clubs', value: 'jack' },
      { suit: 'clubs', value: 'jack' },
      { suit: 'clubs', value: 'jack' },
      { suit: 'clubs', value: 'jack' },
    ],
    player3: [
      { suit: 'clubs', value: 'jack' },
      { suit: 'clubs', value: 'jack' },
      { suit: 'clubs', value: 'jack' },
      { suit: 'clubs', value: 'jack' },
      { suit: 'clubs', value: 'jack' },
    ],
    player4: [
      { suit: 'clubs', value: 'jack' },
      { suit: 'clubs', value: 'jack' },
      { suit: 'clubs', value: 'jack' },
      { suit: 'clubs', value: 'jack' },
      { suit: 'clubs', value: 'jack' },
    ],
  },
  actionMessage: 'Select a card to play',
  currentActivePlayer: 'player1',
  currentDealer: 'player2',
  teamChoseTrump: '',
  gameHost: 'player1',
  gameStatus: 'accepting trump',
  trumpSuit: 'clubs',
  gameName: '',
};

const playerEnteredGameReducer = (state, { payload }) => {
  const playerSlot = getNextOpenPlayerKey(state.players);
  const players = { ...state.players };
  players[playerSlot] = payload.name;
  return {
    ...state,
    players,
  };
};

function hostChosePartnerReducer(state: DBState, { payload }) {
  // do stuff here
  // 1. find playerkey of partner and set partner
  // 2. set teams
  // 3. set game state to 'dealing'
  // 4. set active player to host
  // 5. set player orientation array
  // 6. set scores to 0
  // 7. set current dealer
  return state;
}

function getNextActivePlayer(state: DBState) {
  const orderingOfPlayers = [...state.playerOrdering];
  const indexOfActivePlayer = orderingOfPlayers.findIndex(
    (player) => player === state.currentActivePlayer
  );
  return orderingOfPlayers[(indexOfActivePlayer + 1) % 4];
}

class DealCardsReducer {
  static dealFn = deal;

  static reduce(state: DBState): DBState {
    const dealtHand = DealCardsReducer.dealFn();
    return {
      ...state,
      cardsInPlay: {
        player1: undefined,
        player2: undefined,
        player3: undefined,
        player4: undefined,
      },
      hands: {
        player1: dealtHand.player1,
        player2: dealtHand.player2,
        player3: dealtHand.player3,
        player4: dealtHand.player4,
      },
      kitty: dealtHand.kitty,
      gameStatus: 'accepting trump',
      currentActivePlayer: getNextActivePlayer(state),
    };
  }
}

function getTeamOfPlayer(state: DBState): 'teamA' | 'teamB' {
  const { currentActivePlayer, teams } = state;
  return teams.teamA.player1 === currentActivePlayer ||
    teams.teamA.player2 === currentActivePlayer
    ? 'teamA'
    : 'teamB';
}

function chooseTrumpHelper(state: DBState, trumpSuit: Suit): DBState {
  const teamChoseTrump = getTeamOfPlayer(state);
  return {
    ...state,
    trumpSuit,
    teamChoseTrump,
    gameStatus: 'playing hand',
    currentActivePlayer: getNextActivePlayer(state),
  };
}

function acceptTrumpReducer(state: DBState): DBState {
  const trumpSuit = state.kitty[0].suit;
  return chooseTrumpHelper(state, trumpSuit);
}

function chooseTrumpReducer(state: DBState, { payload }): DBState {
  return chooseTrumpHelper(state, payload.suit);
}

function acceptTrumpDialogTrumpPassedReducer(state: DBState): DBState {
  return {
    ...state,
    currentActivePlayer: getNextActivePlayer(state),
    gameStatus:
      state.currentActivePlayer === state.currentDealer
        ? 'choosing trump'
        : 'accepting trump',
  };
}

function chooseTrumpDialogTrumpPassedReducer(state: DBState): DBState {
  return {
    ...state,
    currentActivePlayer: getNextActivePlayer(state),
  };
}

const reducer = createReducer(
  initialState,
  on(playerEnteredGame, playerEnteredGameReducer),
  on(hostChoseTeammate, hostChosePartnerReducer),
  on(playerDealtCards, DealCardsReducer.reduce),
  on(trumpSuitAccepted, acceptTrumpReducer),
  on(chooseTrumpDialogTrumpChosen, chooseTrumpReducer),
  on(trumpSuitPassed, acceptTrumpDialogTrumpPassedReducer),
  on(chooseTrumpDialogTrumpPassed, chooseTrumpDialogTrumpPassedReducer),
);

export function dbStateReducer(state: DBState | undefined, action: Action) {
  return reducer(state, action);
}
