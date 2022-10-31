import { Bishop, King, Knight, Pawn, Queen, Rook } from "../models";
import { GamePiece, Position, Team } from "../models/game-piece";

interface Move {
  piece: GamePiece;
  from: Position;
  to: Position;
}

export class Game {
  private _activeGamePieces: GamePiece[] = [
    new Rook(Team.White, { row: 0, col: 0 }),
    new Knight(Team.White, { row: 0, col: 1 }),
    new Bishop(Team.White, { row: 0, col: 2 }),
    new Queen(Team.White, { row: 0, col: 3 }),
    new King(Team.White, { row: 0, col: 4 }),
    new Bishop(Team.White, { row: 0, col: 5 }),
    new Knight(Team.White, { row: 0, col: 6 }),
    new Rook(Team.White, { row: 0, col: 7 }),
    new Pawn(Team.White, { row: 1, col: 0 }),
    new Pawn(Team.White, { row: 1, col: 1 }),
    new Pawn(Team.White, { row: 1, col: 2 }),
    new Pawn(Team.White, { row: 1, col: 3 }),
    new Pawn(Team.White, { row: 1, col: 4 }),
    new Pawn(Team.White, { row: 1, col: 5 }),
    new Pawn(Team.White, { row: 1, col: 6 }),
    new Pawn(Team.White, { row: 1, col: 7 }),
    new Pawn(Team.Black, { row: 6, col: 0 }),
    new Pawn(Team.Black, { row: 6, col: 1 }),
    new Pawn(Team.Black, { row: 6, col: 2 }),
    new Pawn(Team.Black, { row: 6, col: 3 }),
    new Pawn(Team.Black, { row: 6, col: 4 }),
    new Pawn(Team.Black, { row: 6, col: 5 }),
    new Pawn(Team.Black, { row: 6, col: 6 }),
    new Pawn(Team.Black, { row: 6, col: 7 }),
    new Rook(Team.Black, { row: 7, col: 0 }),
    new Knight(Team.Black, { row: 7, col: 1 }),
    new Bishop(Team.Black, { row: 7, col: 2 }),
    new Queen(Team.Black, { row: 7, col: 3 }),
    new King(Team.Black, { row: 7, col: 4 }),
    new Bishop(Team.Black, { row: 7, col: 5 }),
    new Knight(Team.Black, { row: 7, col: 6 }),
    new Rook(Team.Black, { row: 7, col: 7 }),
  ];
  private _inActiveGamePieces: GamePiece[] = [];
  private _moves: Move[] = [];
  private _currentTeam: Team = Team.White;

  get activeGamePieces(): GamePiece[] {
    return this._activeGamePieces;
  }

  get inActiveGamePieces(): GamePiece[] {
    return this._inActiveGamePieces;
  }

  get moves(): Move[] {
    return this._moves;
  }

  get currentTeam(): Team {
    return this._currentTeam;
  }

  set currentTeam(team: Team) {
    this._currentTeam = team;
  }

  movePiece(piece: GamePiece, to: Position): void {
    const from = piece.position;
    this._moves.push({ piece, from, to });
    piece.position = to;
    this.currentTeam =
      this.currentTeam === Team.White ? Team.Black : Team.White;
  }

  getGamePieceAtPosition(position: Position): GamePiece | undefined {
    return this.activeGamePieces.find(
      (piece) =>
        piece.position.row === position.row &&
        piece.position.col === position.col
    );
  }

  getOpponentActiveGamePieces(team: Team): GamePiece[] {
    return this.activeGamePieces.filter((piece) => piece.team !== team);
  }
}
