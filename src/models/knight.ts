import { GamePiece, Position, Team } from "./game-piece";
import knightWhite from "../assets/white/knight.png";
import knightBlack from "../assets/black/knight.png";
import { Game } from "../entities/game";

export class Knight extends GamePiece {
  constructor(team: Team, position: Position) {
    super({
      name: "Knight",
      team,
      position,
      symbol: team === Team.White ? knightWhite : knightBlack,
    });
  }

  getMoves(): Position[] {
    const moves = [];

    moves.push({ row: this.position.row + 2, col: this.position.col + 1 });
    moves.push({ row: this.position.row + 2, col: this.position.col - 1 });
    moves.push({ row: this.position.row - 2, col: this.position.col + 1 });
    moves.push({ row: this.position.row - 2, col: this.position.col - 1 });

    moves.push({ row: this.position.row + 1, col: this.position.col + 2 });
    moves.push({ row: this.position.row + 1, col: this.position.col - 2 });
    moves.push({ row: this.position.row - 1, col: this.position.col + 2 });
    moves.push({ row: this.position.row - 1, col: this.position.col - 2 });

    return moves;
  }

  getValidMoves(game: Game): Position[] {
    const moves = this.getMoves();
    const validMoves = moves.filter((move) => {
      const piece = game.getGamePieceAtPosition(move);
      if (piece) {
        return piece.team !== this.team;
      }
      return true;
    });
    return validMoves;
  }
}
