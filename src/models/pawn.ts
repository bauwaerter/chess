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

  getMoves(): Position[] {
    const moves = [];

    const direction = this.team === Team.White ? 1 : -1;

    moves.push({
      row: this.position.row + direction * 2,
      col: this.position.col,
    });
    moves.push({ row: this.position.row + direction, col: this.position.col });
    moves.push({
      row: this.position.row + direction,
      col: this.position.col + 1,
    });
    moves.push({
      row: this.position.row + direction,
      col: this.position.col - 1,
    });

    return moves;
  }

  getValidMoves(game: Game): Position[] {
    const moves = this.getMoves();

    const isFirstMove = game.moves.find((p) => p.piece === this) === undefined;

    const opponentActiveGamePieces = game.getOpponentActiveGamePieces(
      this.team
    );
    const validMoves = moves.filter((move) => {
      // if (isFirstMove) const piece = game.getGamePieceAtPosition(move);
      // if (piece) {
      //   return false;
      // }
      return true;
    });

    return validMoves;
  }
}
