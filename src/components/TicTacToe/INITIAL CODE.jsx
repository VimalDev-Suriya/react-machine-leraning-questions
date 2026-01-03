import { useState } from 'react';

// * THIS HAS THE REVIEW COMMENTS PROVIDED BY CHAT GPT

const Square = (props) => {
  const { value, onClick } = props;

  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

const TicTacToeBoard = (props) => {
  const { board, handleSelect, user, winner } = props;

  // *GPT handleclick holds the business logic, lets move this to parent, to make this board component as presentational
  const handleClick = (idx) => {
    if (board[idx] || winner) return;

    const boardClone = board.slice();
    boardClone[idx] = user;
    handleSelect(boardClone);
  };

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
                onClick={() => handleClick(col)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

const TicTacToe = () => {
  const [board, setBoard] = useState(new Array(9).fill('')); // * use null, instead of ''
  //“currentMove is derived state. It can be removed to reduce state complexity and potential bugs.”
  const [currentMove, setCurrentMove] = useState(0); // State Derivation Smell (currentMove)

  const user = currentMove % 2 === 0 ? 'X' : 'O';

  const winner = calculateWinner(board);

  const handleSelect = (board) => {
    setCurrentMove((prev) => prev + 1);
    setBoard(board);
  };

  return (
    <div className="game-container">
      {winner ? <h1>Winner is {winner}</h1> : null}

      <h2>The Current player: {user}</h2>

      <TicTacToeBoard
        board={board}
        user={user}
        winner={winner}
        handleSelect={handleSelect}
      />
    </div>
  );
};

const possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const calculateWinner = (board) => {
  for (let i = 0; i < possibleWins.length; i++) {
    const [x, y, z] = possibleWins[i];

    if (board[x] && board[x] === board[y] && board[x] === board[z]) {
      return board[x];
    }
  }

  return null;
};

export default TicTacToe;
