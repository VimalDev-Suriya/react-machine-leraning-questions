import { useEffect, useState } from 'react';
import TicTacToeBoard from './TicTacToeBoard';
import { calculateWinner } from '../../utils/tictactoe';
import { ToastContext } from '../Toast/ToastContext';
import { useToast } from '../Toast/useToast';

const TicTacToe = () => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const { success } = useToast();

  const user = isXNext ? 'X' : 'O';

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((user) => user);

  useEffect(() => {
    if (winner) {
      success('Finally we won the game');
    }
  }, [winner, success]);

  const handleSelect = (idx) => {
    if (board[idx] || winner) {
      return;
    }

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
