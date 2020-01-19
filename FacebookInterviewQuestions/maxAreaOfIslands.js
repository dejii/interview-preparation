/**
 * @param {number[][]} grid
 * @return {number}
 */
function dfs(grid, i, j) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === 0
  ) {
    return 0;
  }
  // set as visited
  grid[i][j] = 0;
  let count = 1; // initialize count
  count += dfs(grid, i - 1, j);
  count += dfs(grid, i + 1, j);
  count += dfs(grid, i, j - 1);
  count += dfs(grid, i, j + 1);

  return count;
}
var maxAreaOfIsland = function(grid) {
  let max = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, dfs(grid, i, j));
      }
    }
  }
  return max;
};
/**
 * it's N^2, where N is the number of all the grids
To be more accurate, it's MN, where M is the number of all the '1's


 */

let grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1]
];

console.log(maxAreaOfIsland(grid));

/*
ISLAND PERIMETER

public class Solution {
    public int islandPerimeter(int[][] grid) {
        int islands = 0, neighbours = 0;

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == 1) {
                    islands++; // count islands
                    if (i < grid.length - 1 && grid[i + 1][j] == 1) neighbours++; // count down neighbours
                    if (j < grid[i].length - 1 && grid[i][j + 1] == 1) neighbours++; // count right neighbours
                }
            }
        }

        return islands * 4 - neighbours * 2;
    }

just math, man. ;-P

the description of this problem implies there may be an "pattern" in calculating the perimeter of the islands.
and the pattern is islands * 4 - neighbours * 2, since every adjacent islands made two sides disappeared(as picture below).
the next problem is: how to find the neighbours without missing or recounting? i was inspired by the problem: https://leetcode.com/problems/battleships-in-a-board/
+--+     +--+                   +--+--+
|  |  +  |  |          ->       |     |
+--+     +--+                   +--+--+
4 + 4 - ? = 6  -> ? = 2
}
*/
