import create from "zustand";
import { Board } from "../components/Board";
import { Game } from "../entities/game";
import { BoardModel } from "../models/board-model";
import { GamePiece, Position, Team } from "../models/game-piece";

const initialState = {
  game: new Game(),
  gameBoard: new BoardModel(),
  selectedPiece: null,
  winner: null,
};

interface State {
  game: Game;
  gameBoard: BoardModel;
  selectedPiece: GamePiece | null;
  winner: Team | null;
  setSelectedPiece: (piece: GamePiece) => void;
  movePiece: (position: Position) => void;
  setWinner: (winner: Team) => void;
  reset: () => void;
}

export const useGameStore = create<State>()((set, get) => ({
  ...initialState,
  selectedPiece: null,
  setSelectedPiece: (piece: GamePiece) => set({ selectedPiece: piece }),
  movePiece: (position: Position) => {
    const { game, selectedPiece } = get();
    if (!selectedPiece) return;
    game.movePiece(selectedPiece, position);
    set({
      game,
      selectedPiece: null,
    });
  },
  setWinner: (winner: Team | null) => set({ winner }),
  reset: () => {
    set(initialState);
  },
}));
