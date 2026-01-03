import Square from './Square';

const TicTacToeBoard = (props) => {
  const { board, handleSelect } = props;

  return (
    <div className="game-board">
      {[0, 1, 2].map((boardRow) => (
        <div className="board-row" key={`board-row-${boardRow + 1}`}>
          {[0, 1, 2].map((square) => {
            let col = boardRow * 3 + square;
            return (
              <Square
                key={`square-${col + 1}`}
                value={board[col]}
                onClick={() => handleSelect(col)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TicTacToeBoard;
