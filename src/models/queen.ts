import { GamePiece, Position, Team } from "./game-piece";
import queenWhite from "../assets/white/queen.png";
import queenBlack from "../assets/black/queen.png";
import { Game } from "../entities/game";

export class Queen extends GamePiece {
  constructor(team: Team, position: Position) {
    super({
      name: "Queen",
      team,
      position,
      symbol: team === Team.White ? queenWhite : queenBlack,
    });
  }

  getMoves(): Position[] {
    const moves = [];

    for (let i = 1; i < 8; i++) {
      moves.push({ row: this.position.row + i, col: this.position.col });
      moves.push({ row: this.position.row - i, col: this.position.col });
      moves.push({ row: this.position.row, col: this.position.col + i });
      moves.push({ row: this.position.row, col: this.position.col - i });
    }

    return moves;
  }

  getValidMoves(game: Game): Position[] {
    const moves = [];

    for (let i = 1; i < 8; i++) {
      moves.push({ row: this.position.row + i, col: this.position.col + i });
      moves.push({ row: this.position.row - i, col: this.position.col + i });
      moves.push({ row: this.position.row + i, col: this.position.col - i });
      moves.push({ row: this.position.row - i, col: this.position.col - i });
    }

    return moves;
  }
}
