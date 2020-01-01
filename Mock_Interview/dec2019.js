// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// For example, the below matrix contains 6 islands

/*
  [[1, 1, 0, 0, 0],
   [0, 1, 0, 0, 1],
   [1, 0, 0, 1, 1],
   [0, 0, 0, 0, 0],
   [1, 0, 1, 0, 1]
];
*/

let grid = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1]
];

function clear(i, j, n, m, grid, set) {
  if (
    i < 0 ||
    j < 0 ||
    i >= n ||
    j >= m ||
    set.has(`${i},${j}`)
    // grid[i][j] === 0
  ) {
    return;
  }
  console.log(`${i},${j}`);
  //   grid[i][j] = 0;
  set.add(`${i},${j}`);
  //   console.log(set);
  clear(i + 1, j, n, m, grid, set);
  clear(i - 1, j, n, m, grid, set);
  clear(i, j + 1, n, m, grid, set);
  clear(i, j - 1, n, m, grid, set);
}

function numberOfIslands(grid) {
  let set = new Set();
  let n = grid.length;
  let m = grid[0].length;

  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        count++;
        clear(i, j, n, m, grid, set);
      }
    }
  }
  //   console.log(set);

  return count;
}
console.log(numberOfIslands(grid));
// 2ND QUESTION WAS MOVE ZEROS
