import { GamePiece, Position, Team } from "./game-piece";
import kingWhite from "../assets/white/king.png";
import kingBlack from "../assets/black/king.png";
import { Game } from "../entities/game";

export class King extends GamePiece {
  constructor(team: Team, position: Position) {
    super({
      name: "King",
      team,
      position,
      symbol: team === Team.White ? kingWhite : kingBlack,
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
