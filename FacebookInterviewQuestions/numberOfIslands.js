/*
    Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
    An island is surrounded by water and is formed by connecting adjacent lands horizontally
     or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3

Follow up, how will you do it changing the grid?
 - Create another grid called visited and marking the visited cells as true

*/

var clear = function(grid, i, j, n, m) {
  if (i < 0 || i >= n || j < 0 || j >= m || grid[i][j] === "0") {
    return;
  }
  grid[i][j] = "0";
  clear(grid, i + 1, j, n, m);
  clear(grid, i - 1, j, n, m);
  clear(grid, i, j + 1, n, m);
  clear(grid, i, j - 1, n, m);
};
var numIslands = function(grid) {
  if (grid === null || grid.length === 0) {
    return 0;
  }
  let n = grid.length;
  let m = grid[0].length;

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1") {
        clear(grid, i, j, n, m);
        count++;
      }
    }
  }
  return count;
};
