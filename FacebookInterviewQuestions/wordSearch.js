/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function dfs(board, i, j, count, word) {
  if (count === word.length) {
    return true;
  }
  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[i].length ||
    board[i][j] !== word.charAt(count)
  ) {
    return false;
  }

  let temp = board[i][j];
  board[i][j] = "#";

  let found =
    dfs(board, i + 1, j, count + 1, word) ||
    dfs(board, i - 1, j, count + 1, word) ||
    dfs(board, i, j + 1, count + 1, word) ||
    dfs(board, i, j - 1, count + 1, word);

  board[i][j] = temp;

  return found;
}
var exist = function(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word.charAt(0) && dfs(board, i, j, 0, word)) {
        return true;
      }
    }
  }
  return false;
};

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
];
console.log(exist(board, "ABCCED"));
