import { TeamName } from './teamname';

export interface PlayerScoreMap {
    [teamName: string]: number;
}

export interface Score {
    hand: PlayerScoreMap;
    game: PlayerScoreMap;
}
