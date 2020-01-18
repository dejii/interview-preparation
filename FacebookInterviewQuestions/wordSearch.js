/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function dfs(board, i, j, index, word) {
  if (index === word.length) {
    return true;
  }
  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[i].length ||
    board[i][j] !== word.charAt(index)
  ) {
    return false;
  }

  let temp = board[i][j];
  board[i][j] = "#";

  let found =
    dfs(board, i + 1, j, index + 1, word) ||
    dfs(board, i - 1, j, index + 1, word) ||
    dfs(board, i, j + 1, index + 1, word) ||
    dfs(board, i, j - 1, index + 1, word);

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

/**
 *
 * Since no one is talking about the complexity. I think space is O(L) where L is the length of the word;
 *  and time is O(M * N * 4^L) where M*N is the size of the board and we have 4^L for each cell because of
 * the recursion. Of course this would be an upper bound. Not sure if it is good enough in an interview.
 */
