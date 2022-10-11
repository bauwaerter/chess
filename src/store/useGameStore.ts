import create from "zustand";
import { Board } from "../components/Board";
import { Bishop, King, Knight, Pawn, Queen, Rook } from "../models";
import { BoardModel } from "../models/board-model";
import { GamePiece, Position, Team } from "../models/game-piece";

const initialBoardState = [
  new Rook(Team.White, { row: 0, col: 0 }),
  new Knight(Team.White, { row: 0, col: 1 }),
  new Bishop(Team.White, { row: 0, col: 2 }),
  new Queen(Team.White, { row: 0, col: 3 }),
  new King(Team.White, { row: 0, col: 4 }),
  new Bishop(Team.White, { row: 0, col: 5 }),
  new Knight(Team.White, { row: 0, col: 6 }),
  new Rook(Team.White, { row: 0, col: 7 }),
  new Pawn(Team.White, { row: 1, col: 0 }),
  new Pawn(Team.White, { row: 1, col: 1 }),
  new Pawn(Team.White, { row: 1, col: 2 }),
  new Pawn(Team.White, { row: 1, col: 3 }),
  new Pawn(Team.White, { row: 1, col: 4 }),
  new Pawn(Team.White, { row: 1, col: 5 }),
  new Pawn(Team.White, { row: 1, col: 6 }),
  new Pawn(Team.White, { row: 1, col: 7 }),
  new Pawn(Team.Black, { row: 6, col: 0 }),
  new Pawn(Team.Black, { row: 6, col: 1 }),
  new Pawn(Team.Black, { row: 6, col: 2 }),
  new Pawn(Team.Black, { row: 6, col: 3 }),
  new Pawn(Team.Black, { row: 6, col: 4 }),
  new Pawn(Team.Black, { row: 6, col: 5 }),
  new Pawn(Team.Black, { row: 6, col: 6 }),
  new Pawn(Team.Black, { row: 6, col: 7 }),
  new Rook(Team.Black, { row: 7, col: 0 }),
  new Knight(Team.Black, { row: 7, col: 1 }),
  new Bishop(Team.Black, { row: 7, col: 2 }),
  new Queen(Team.Black, { row: 7, col: 3 }),
  new King(Team.Black, { row: 7, col: 4 }),
  new Bishop(Team.Black, { row: 7, col: 5 }),
  new Knight(Team.Black, { row: 7, col: 6 }),
  new Rook(Team.Black, { row: 7, col: 7 }),
];

const initialState = {
  boardState: initialBoardState,
  gameBoard: new BoardModel(),
  selectedPiece: null,
  team: Team.White,
  winner: null,
};

interface State {
  boardState: GamePiece[];
  gameBoard: BoardModel;
  selectedPiece: GamePiece | null;
  team: Team;
  winner: Team | null;
  setSelectedPiece: (piece: GamePiece) => void;
  movePiece: (Position: Position) => void;
  setWinner: (winner: Team) => void;
  setTeam: (team: Team) => void;
  reset: () => void;
}

export const useGameStore = create<State>()((set, get) => ({
  ...initialState,
  selectedPiece: null,
  setSelectedPiece: (piece: GamePiece) => set({ selectedPiece: piece }),
  movePiece: (position: Position) => {
    const { boardState, selectedPiece, team } = get();
    const newBoardState = boardState.map((piece) => {
      if (selectedPiece && piece === selectedPiece) {
        piece.position = position;
      }
      return piece;
    });
    set({
      boardState: newBoardState,
      selectedPiece: null,
      team: team === Team.White ? Team.Black : Team.White,
    });
  },
  setWinner: (winner: Team | null) => set({ winner }),
  setTeam: (team: Team) => set({ team }),
  reset: () => {
    set(initialState);
  },
}));
