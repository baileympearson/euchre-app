import { createReducer, on, Action } from "@ngrx/store";
import { Score } from "../shared/models/score";
import { GameStatus } from "../shared/models/game-status";
import { Card } from "../shared/models/card";
import { Player } from "../shared/models/player";
import { NoopAnimationPlayer } from "@angular/animations";
import { toggleElevateCards } from "./actions";

export interface StoreState {
  user: Player;
  activeGame: {
    userAction: string;
    gameName: string;
    players: Player[];
    score: Score;
    teams: {
      teamA: {
        player1: Player;
        player2: Player;
      };
      teamB: {
        player1: Player;
        player2: Player;
      };
    };
    gameStatus: GameStatus;
    handData: {
      kitty: Card[];
      kittyFaceUp: boolean;
      teamChoseTrump: "teamA" | "teamB";
      currentDealer: Player;
    };
    gameMetaData: {
      elevateCards: boolean;
    };
  };
}

const initialState: StoreState = {
  user: "Bailey",
  activeGame: {
    userAction: "Select a card to play",
    gameName: "Blah Blah",
    players: ["bailey", "joe", "keaton", "nate"],
    score: {
      game: {
        teamA: 3,
        teamB: 10,
      },
      hand: {
        teamA: 3,
        teamB: 2,
      },
    },
    teams: {
      teamA: {
        player1: "bailey",
        player2: "keaton",
      },
      teamB: {
        player1: "joe",
        player2: "nate",
      },
    },
    gameStatus: "player dealing",
    handData: {
      kitty: [{ value: "9", suit: "clubs" }],
      kittyFaceUp: true,
      teamChoseTrump: "teamA",
      currentDealer: "bailey",
    },
    gameMetaData: {
      elevateCards: false,
    },
  },
};

const reducer = createReducer(
  initialState,
  on(toggleElevateCards, (state) => {
    return {
      ...state,
      activeGame: {
        ...state.activeGame,
        gameMetaData: {
          elevateCards: !state.activeGame.gameMetaData.elevateCards,
        },
      },
    };
  })
);

export function appReducer(state: StoreState | undefined, action: Action) {
  return reducer(state, action);
}
