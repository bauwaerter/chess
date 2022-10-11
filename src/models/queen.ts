import { GamePiece, Position, Team } from "./game-piece";
import queenWhite from "../assets/white/queen.png";
import queenBlack from "../assets/black/queen.png";

export class Queen extends GamePiece {
  constructor(team: Team, position: Position) {
    super({
      name: "Queen",
      team,
      position,
      symbol: team === Team.White ? queenWhite : queenBlack,
    });
  }

  getValidMoves() {
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
