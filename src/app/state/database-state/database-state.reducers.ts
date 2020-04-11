import { createReducer, on, Action } from "@ngrx/store";
import { GameStatus } from "src/app/shared/models/game-status";
import { Suit } from "src/app/shared/models/suit";
import { Card } from "src/app/shared/models/card";
import { PlayerKey } from "src/app/shared/models/player-key";
import { playerEnteredGame, hostChoseTeammate, playerDealtCards } from '../actions';
import { deal } from 'src/app/game-logic/utils';

export interface DBState {
  teams: {
    teamA: {
      player1: string;
      player2: string;
    };
    teamB: {
      player1: string;
      player2: string;
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
  currentActivePlayer: string;
  teamChooseTrump: "teamA" | "teamB" | "";
  currentDealer: PlayerKey;
  gameHost: PlayerKey;
  gameStatus: GameStatus;
  trumpSuit: Suit | undefined;
  gameName: string;
}

const initialState: DBState = {
  teams: {
    teamA: {
      player1: "bailey",
      player2: "joe",
    },
    teamB: {
      player1: "jordyn",
      player2: "nate",
    },
  },
  scores: {
    teamATricks: 4,
    teamBTricks: 1,
    teamAScore: 3,
    teamBScore: 7,
  },
  players: {
    player1: "patty",
    player2: "becca",
    player3: "",
    player4: "",
  },
  playerOrdering: [],
  kitty: [{ suit: "spades", value: "9" }],
  cardsInPlay: {
    player1: { suit: "diamonds", value: "10" },
    player2: { suit: "clubs", value: "10" },
    player3: { suit: "spades", value: "10" },
    player4: { suit: "hearts", value: "10" },
  },
  hands: {
    player1: [
      {
        suit: "clubs",
        value: "jack",
      },
    ],
    player2: [
      { suit: "clubs", value: "jack" },
      { suit: "clubs", value: "jack" },
      { suit: "clubs", value: "jack" },
      { suit: "clubs", value: "jack" },
      { suit: "clubs", value: "jack" },
    ],
    player3: [],
    player4: [],
  },
  actionMessage: "Select a card to play",
  currentActivePlayer: "",
  currentDealer: "player1",
  teamChooseTrump: "",
  gameHost: "player1",
  gameStatus: "playing hand",
  trumpSuit: "clubs",
  gameName: "",
};

const playerEnteredGameReducer = (state, { payload }) => {
  const getPlayerSlot = players => {
    if (players.player1.length === 0) {
      return "player1";
    } else if (players.player2.length === 0) {
      return "player2";
    } else if (players.player3.length === 0) {
      return "player3";
    } else if (players.player4.length === 0) {
      return "player4";
    } else {
      return "";
    }
  };

  const playerSlot = getPlayerSlot(state.players);
  if (!playerSlot) {
    return { ...state }
  }
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
  const indexOfActivePlayer = orderingOfPlayers.findIndex(player => player === state.currentActivePlayer);
  return orderingOfPlayers[(indexOfActivePlayer + 1) % 4];
}

function playerDealtCardsReducer(state: DBState): DBState {
  const dealtHand = deal();
  return { 
    ...state,
    cardsInPlay: {
      player1: undefined,
      player2: undefined,
      player3: undefined,
      player4: undefined
    },
    hands: {
      player1: dealtHand.player1,
      player2: dealtHand.player2,
      player3: dealtHand.player3,
      player4: dealtHand.player4,
    },
    kitty: dealtHand.kitty,
    gameStatus: 'accepting trump',
    currentActivePlayer: getNextActivePlayer(state)
  }
}

const reducer = createReducer(initialState,
  on(playerEnteredGame, playerEnteredGameReducer),
  on(hostChoseTeammate, hostChosePartnerReducer),
  on(playerDealtCards, playerDealtCardsReducer)
);



export function dbStateReducer(state: DBState | undefined, action: Action) {
  return reducer(state, action);
}
