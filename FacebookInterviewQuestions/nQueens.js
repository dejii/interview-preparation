/**
 * @param {number} n
 * @return {string[][]}
 */
function generate(board) {
  let arr = [];
  for (let i = 0; i < board.length; i++) {
    let temp = [];
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === "Q") {
        temp.push("Q");
      } else {
        temp.push(".");
      }
    }
    arr.push(temp.join(""));
  }
  return arr;
}

function isValid(board, row, col) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === "Q") {
        // ensure its not in the same row, col, leftDiag, rightDiag
        if (
          row === i ||
          col === j ||
          row - col === i - j ||
          row + col === i + j
        ) {
          return false;
        }
      }
    }
  }
  return true;
}

function dfs(board, rowIdx, result) {
  // goal
  if (rowIdx === board.length) {
    result.push(generate(board));
    return;
  }
  // choices
  for (let col = 0; col < board.length; col++) {
    board[rowIdx][col] = "Q";
    if (isValid(board, rowIdx, col)) {
      dfs(board, rowIdx + 1, result);
    }
    // backtrack
    board[rowIdx][col] = ".";
  }
}
var solveNQueens = function(n) {
  let result = [];
  let board = [];
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(".");
    }
    board.push(arr);
  }

  dfs(board, 0, result);
  return result;
};

console.log(solveNQueens(8));

// O(n^2x n!)
