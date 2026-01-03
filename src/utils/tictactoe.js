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

export const calculateWinner = (board) => {
  for (let i = 0; i < possibleWins.length; i++) {
    const [x, y, z] = possibleWins[i];

    if (board[x] && board[x] === board[y] && board[x] === board[z]) {
      return board[x];
    }
  }

  return null;
};
