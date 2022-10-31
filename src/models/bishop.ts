import { GamePiece, Position, Team } from "./game-piece";
import bishopWhite from "../assets/white/bishop.png";
import bishopBlack from "../assets/black/bishop.png";
import { Game } from "../entities/game";

export class Bishop extends GamePiece {
  constructor(team: Team, position: Position) {
    super({
      name: "Bishop",
      team,
      position,
      symbol: team === Team.White ? bishopWhite : bishopBlack,
    });
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
