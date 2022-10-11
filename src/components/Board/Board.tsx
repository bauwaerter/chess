import { useGameStore } from "../../store";
import { BoardCell } from "../BoardCell";

export const Board: React.FC = () => {
  const { gameBoard } = useGameStore();
  return (
    <div className="flex flex-col">
      {gameBoard.rows.map((row) => {
        return (
          <div key={`board-row-${row.display}`} className="flex flex-row">
            {gameBoard.columns.map((column) => {
              return (
                <BoardCell
                  key={`board-cell-${row.display}-${column.display}`}
                  row={row}
                  column={column}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
