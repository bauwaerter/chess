import clsx from "clsx";
import { useGameStore } from "../../store";

interface BoardCell {
  index: number;
  display: string;
}

interface Props {
  row: BoardCell;
  column: BoardCell;
}

export const BoardCell: React.FC<Props> = ({ row, column }) => {
  const { boardState, team, selectedPiece, setSelectedPiece, movePiece } =
    useGameStore();
  const isBlack = (row.index + column.index) % 2 === 0;
  const activePiece = boardState.find(
    (piece) =>
      piece.position.row === row.index && piece.position.col === column.index
  );
  let pieceImage = null;
  if (activePiece) {
    pieceImage = (
      <img
        className="h-16 w-16"
        src={activePiece.symbol}
        alt={activePiece.name}
      />
    );
  }

  const moves = selectedPiece?.getValidMoves();

  const isActiveTeam = activePiece && activePiece.team === team;
  const isSelectedPiece =
    selectedPiece?.position.col === column.index &&
    selectedPiece?.position.row === row.index;

  const isPossibleMove = moves?.find(
    (move) => move.col === column.index && move.row === row.index
  );

  const handleCellClick = () => {
    if (activePiece && activePiece.team === team) {
      setSelectedPiece(activePiece);
      return;
    }
    if (selectedPiece && isPossibleMove) {
      movePiece({ row: row.index, col: column.index });
      return;
    }
  };

  return (
    <div
      onClick={handleCellClick}
      className={clsx(
        "flex h-24 w-24 border border-solid align-middle relative",
        {
          "bg-slate-100": isBlack,
          "bg-gray-50": !isBlack,
          "hover:cursor-pointer": isActiveTeam || isPossibleMove,
          "border-green-700": isSelectedPiece,
          "border-2": isSelectedPiece || isPossibleMove,
          "bg-green-300": isPossibleMove,
        }
      )}
    >
      <div className="top-0 left-0 text-xs font-medium text-slate-400">
        {row.display}
        {column.display}
      </div>
      <div className="flex justify-center items-center">{pieceImage}</div>
    </div>
  );
};
