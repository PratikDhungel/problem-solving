const generateParenthesis = (n) => {
  const solutions = [];

  const open = n;
  const close = n;
  const combination = '';

  solve(open - 1, close, n, '(', solutions);

  return solutions;
};

const solve = (open, close, n, combination, solutions) => {
  if (combination.length === n * 2) {
    solutions.push(combination);
  }

  if (open > 0) solve(open - 1, close, n, combination + '(', solutions);
  if (close > open) solve(open, close - 1, n, combination + ')', solutions);
};

console.log(generateParenthesis(4));
