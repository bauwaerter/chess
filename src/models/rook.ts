import { GamePiece, Position, Team } from "./game-piece";
import rookWhite from "../assets/white/rook.png";
import rookBlack from "../assets/black/rook.png";

interface RookProps {
  team: Team;
  currentPosition: number[];
}

export class Rook extends GamePiece {
  constructor(team: Team, position: Position) {
    super({
      name: "Rook",
      team,
      position,
      symbol: team === Team.White ? rookWhite : rookBlack,
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
