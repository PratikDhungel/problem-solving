const solveNQueens = (n) => {
  const results = [];

  const columns = new Set();
  const negDiag = new Set();
  const posDiag = new Set();

  const board = [];

  for (let i = 0; i < n; i++) {
    const emptyRow = new Array(n).fill('.');
    board.push(emptyRow);
  }

  const solve = (row) => {
    // If queens have been placed in each row
    // Add current board state to results
    if (row === n) {
      const updatedBoardState = [];

      for (let i = 0; i < n; i++) {
        const currentRowString = board[i].join('');
        updatedBoardState.push(currentRowString);
      }

      results.push(updatedBoardState);
    }

    for (let col = 0; col < n; col++) {
      // If current column position is not valid, continue
      if (columns.has(col) || negDiag.has(row - col) || posDiag.has(row + col)) continue;

      // Add current position to columns set
      // Update negative, positive diagonals and place queen in board
      columns.add(col);
      negDiag.add(row - col);
      posDiag.add(row + col);
      board[row][col] = 'Q';

      // Solve board state for next row
      solve(row + 1);

      // Clear current column state after iteration over next rows are complete
      columns.delete(col);
      negDiag.delete(row - col);
      posDiag.delete(row + col);
      board[row][col] = '.';
    }
  };

  solve(0);

  return results;
};

const fourQueenSolution = solveNQueens(4);

console.log(fourQueenSolution);
