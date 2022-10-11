import { GamePiece, Position, Team } from "./game-piece";
import pawnWhite from "../assets/white/pawn.png";
import pawnBlack from "../assets/black/pawn.png";

export class Pawn extends GamePiece {
  constructor(team: Team, position: Position) {
    super({
      name: "Pawn",
      team,
      position,
      symbol: team === Team.White ? pawnWhite : pawnBlack,
    });
  }

  getValidMoves() {
    const moves = [];

    if (this.team === Team.White) {
      moves.push({ row: this.position.row + 1, col: this.position.col });
    } else {
      moves.push({ row: this.position.row - 1, col: this.position.col });
    }

    return moves;
  }
}
