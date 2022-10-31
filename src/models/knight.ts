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
