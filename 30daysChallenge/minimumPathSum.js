/**
 * @param {number[][]} grid
 * @return {number}
 */
function dfs(result, currentSum, i, j, n, m, grid) {
    if (i >= n || j >= m) return;
    currentSum += grid[i][j];
    if (i === n - 1 && j === m - 1) {
        result.min = Math.min(currentSum, result.min);
        return
    }
    dfs(result, currentSum, i, j + 1, n, m, grid);
    dfs(result, currentSum, i + 1, j, n, m, grid);
}

var minPathSum = function (grid) {
    let result = {
        min: Infinity
    }
    let n = grid.length;
    let m = grid[0].length;

    dfs(result, 0, 0, 0, n, m, grid);

    return result.min;
};
let grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]
// grid = [[3, 8, 6, 0, 5, 9, 9, 6, 3, 4, 0, 5, 7, 3, 9, 3], [0, 9, 2, 5, 5, 4, 9, 1, 4, 6, 9, 5, 6, 7, 3, 2], [8, 2, 2, 3, 3, 3, 1, 6, 9, 1, 1, 6, 6, 2, 1, 9], [1, 3, 6, 9, 9, 5, 0, 3, 4, 9, 1, 0, 9, 6, 2, 7], [8, 6, 2, 2, 1, 3, 0, 0, 7, 2, 7, 5, 4, 8, 4, 8], [4, 1, 9, 5, 8, 9, 9, 2, 0, 2, 5, 1, 8, 7, 0, 9], [6, 2, 1, 7, 8, 1, 8, 5, 5, 7, 0, 2, 5, 7, 2, 1], [8, 1, 7, 6, 2, 8, 1, 2, 2, 6, 4, 0, 5, 4, 1, 3], [9, 2, 1, 7, 6, 1, 4, 3, 8, 6, 5, 5, 3, 9, 7, 3], [0, 6, 0, 2, 4, 3, 7, 6, 1, 3, 8, 6, 9, 0, 0, 8], [4, 3, 7, 2, 4, 3, 6, 4, 0, 3, 9, 5, 3, 6, 9, 3], [2, 1, 8, 8, 4, 5, 6, 5, 8, 7, 3, 7, 7, 5, 8, 3], [0, 7, 6, 6, 1, 2, 0, 3, 5, 0, 8, 0, 8, 7, 4, 3], [0, 4, 3, 4, 9, 0, 1, 9, 7, 7, 8, 6, 4, 6, 9, 5], [6, 5, 1, 9, 9, 2, 2, 7, 4, 2, 7, 2, 2, 3, 7, 2], [7, 1, 9, 6, 1, 2, 7, 0, 9, 6, 6, 4, 4, 5, 1, 0], [3, 4, 9, 2, 8, 3, 1, 2, 6, 9, 7, 0, 2, 4, 2, 0], [5, 1, 8, 8, 4, 6, 8, 5, 2, 4, 1, 6, 2, 2, 9, 7]]
console.log(minPathSum(grid))

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {

    let n = grid.length;
    let m = grid[0].length;
    let dp = [];
    for (let i = 0; i < n; i++) {
        let temp = [];
        for (let j = 0; j < m; j++) {
            temp.push(0);
        }
        dp.push(temp);
    }
    dp[0][0] = grid[0][0]
    for (let i = 1; i < n; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    }
    for (let j = 1; j < m; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j]
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }

    }

    return dp[n - 1][m - 1];
};