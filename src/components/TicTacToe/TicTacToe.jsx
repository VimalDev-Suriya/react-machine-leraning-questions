import { useState } from 'react';

import TicTacToeBoard from './TicTacToeBoard';
import { calculateWinner } from '../../utils/tictactoe';

const TicTacToe = () => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const user = isXNext ? 'X' : 'O';

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((user) => user);

  const handleSelect = (idx) => {
    if (board[idx] || winner) return;

    const boardClone = [...board];
    boardClone[idx] = user;

    setIsXNext((prev) => !prev);
    setBoard(boardClone);
  };

  return (
    <div className="game-container">
      {winner ? <h1>Winner is {winner}</h1> : null}
      {isDraw && <h1>Game Draw</h1>}

      <h2>The Current player: {user}</h2>

      <TicTacToeBoard board={board} handleSelect={handleSelect} />
    </div>
  );
};

export default TicTacToe;
