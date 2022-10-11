export enum Team {
  White = "White",
  Black = "Black",
}
export type PieceName =
  | "Pawn"
  | "Rook"
  | "Knight"
  | "Bishop"
  | "Queen"
  | "King";

export type Position = {
  row: number;
  col: number;
};

interface Props {
  name: PieceName;
  team: Team;
  symbol: string;
  position: Position;
}

export abstract class GamePiece {
  private _name: PieceName;
  private _team: Team;
  private _symbol: string;
  private _position: Position;

  constructor({ name, team, symbol, position }: Props) {
    this._name = name;
    this._team = team;
    this._symbol = symbol;
    this._position = position;
  }

  get name(): PieceName {
    return this._name;
  }

  get team(): Team {
    return this._team;
  }

  get symbol(): string {
    return this._symbol;
  }

  get position(): Position {
    return this._position;
  }

  set position(position: Position) {
    this._position = position;
  }

  abstract getValidMoves(): Position[];
}
