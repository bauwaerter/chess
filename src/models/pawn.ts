import { GamePiece, Position, Team } from "./game-piece";
import pawnWhite from "../assets/white/pawn.png";
import pawnBlack from "../assets/black/pawn.png";
import { Game } from "../entities/game";

export class Pawn extends GamePiece {
  constructor(team: Team, position: Position) {
    super({
      name: "Pawn",
      team,
      position,
      symbol: team === Team.White ? pawnWhite : pawnBlack,
    });
  }

  private getMoves(game: Game): Position[] {
    const moves = [];

    const isFirstMove = game.moves.find((p) => p.piece === this) === undefined;
    const direction = this.team === Team.White ? 1 : -1;
    if (isFirstMove) {
      moves.push({
        row: this.position.row + direction * 2,
        col: this.position.col,
      });
    }
    moves.push({ row: this.position.row + direction, col: this.position.col });

    const opponentActiveGamePieces = game.getOpponentActiveGamePieces(
      this.team
    );
    if (
      opponentActiveGamePieces.find(
        (p) =>
          p.position.row === this.position.row + direction &&
          p.position.col === this.position.col + 1
      )
    ) {
      moves.push({
        row: this.position.row + direction,
        col: this.position.col + 1,
      });
    }
    if (
      opponentActiveGamePieces.find(
        (p) =>
          p.position.row === this.position.row + direction &&
          p.position.col === this.position.col - 1
      )
    ) {
      moves.push({
        row: this.position.row + direction,
        col: this.position.col - 1,
      });
    }

    return moves;
  }

  getValidMoves(game: Game): Position[] {
    const moves = this.getMoves(game);

    moves.filter((move) => {
      const piece = game.getGamePieceAtPosition(move);
      if (piece) {
        return false;
      }
      return true;
    });

    return moves;
  }
}
