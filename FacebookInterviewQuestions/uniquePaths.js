var uniquePaths = function(m, n) {
  let dp = [];
  for (let i = 0; i < m; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(0);
    }
    dp.push(arr);
  }
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 2));

/**
 * 
 * Since the robot can only move right and down, when it arrives at a point, 
 * it either arrives from left or above. If we use dp[i][j] for the number of unique paths to
 *  arrive at the point (i, j), then the state equation is dp[i][j] = dp[i][j - 1] + dp[i - 1][j].
 *  Moreover, we have the base cases dp[0][j] = dp[i][0] = 1 for all valid i and j.
 * 
 *  public int uniquePaths(int m, int n) {
    return uniquePathsHelper(m - 1, n - 1);
  }
  
  private int uniquePathsHelper(int m, int n) {
    if (m < 0 || n < 0) {
      return 0;
    } else if (m == 0 || n == 0) {
      return 1;
    } else {
      return uniquePathsHelper(m - 1, n) + uniquePathsHelper(m, n - 1);
    }
  }
}
Starting from cell [m - 1][n - 1] has 2 options: up and left. 
If you arrive at m == 0 that means that the only way you can go is left, 
that means that you have only 1 option to get there. Similar for n == 0.

II
https://leetcode.com/problems/unique-paths-ii/discuss/23248/My-C%2B%2B-Dp-solution-very-simple!

public class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int m = obstacleGrid.length, n = obstacleGrid[0].length;
        
        //flip upper left cell (the start cell): 1 => 0 or 0 => 1
        obstacleGrid[0][0] ^= 1;
        
        //first row: if 1, then 0; otherwise, left cell
        for(int i = 1; i < n; i++)
            obstacleGrid[0][i] = obstacleGrid[0][i] == 1 ? 0 : obstacleGrid[0][i - 1];
        
        //first column: if 1, then 0; otherwise, top cell
        for(int i = 1; i < m; i++)
            obstacleGrid[i][0] = obstacleGrid[i][0] == 1 ? 0 : obstacleGrid[i - 1][0];
            
        //rest: if 1, then 0; otherwise, left cell + top cell
        for(int i = 1; i < m; i++)
            for(int j = 1; j < n; j++)
                obstacleGrid[i][j] = obstacleGrid[i][j] == 1 ? 0 : obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
                
        //return lower right cell (the end cell)
        return obstacleGrid[m - 1][n - 1];
    }
}

III

    int res = 0, empty = 1, sx, sy, ex, ey;
    public int uniquePathsIII(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid[i][j] == 0) empty++;
                else if (grid[i][j] == 1) {
                    sx = i;
                    sy = j;
                } else if (grid[i][j] == 2) {
                    ex = i;
                    ey = j;
                }
            }
        }
        dfs(grid, sx, sy);
        return res;
    }

    public void dfs(int[][] grid, int x, int y) {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] < 0)
            return;
        if (x == ex && y == ey) {
            if (empty == 0) res++;
            return;
        }
        grid[x][y] = -2;
        empty--;
        dfs(grid, x + 1, y);
        dfs(grid, x - 1, y);
        dfs(grid, x, y + 1);
        dfs(grid, x, y - 1);
        grid[x][y] = 0;
        empty++;
    }
 */
