/**
 * 
 *You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF 
as you may assume that the distance to a gate is less than 2147483647. 
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, 
it should be filled with INF.
For example, given the 2D grid:

INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF
After running your function, the 2D grid should be:

 3  -1   0   1
 2   2   1  -1
 1  -1   2  -1
 0  -1   3   4
 */
function dfs(i, j, n, m, count, grid) {
  if (i < 0 || i >= n || j < 0 || j >= m || grid[i][j] < count) {
    return;
  }
  grid[i][j] = count;
  dfs(i + 1, j, n, m, count + 1, grid);
  dfs(i - 1, j, n, m, count + 1, grid);
  dfs(i, j + 1, n, m, count + 1, grid);
  dfs(i, j - 1, n, m, count + 1, grid);
}

function wallsAndGates(grid) {
  let n = grid.length;
  let m = grid[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0) {
        dfs(i, j, n, m, 0, grid);
      }
    }
  }
  return grid;
}

let grid = [
  [Infinity, -1, 0, Infinity],
  [Infinity, Infinity, Infinity, -1],
  [Infinity, -1, Infinity, -1],
  [0, -1, Infinity, Infinity]
];
console.log(wallsAndGates(grid));
