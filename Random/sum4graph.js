function solution(grid) {
  let n = grid.length;
  let m = grid[0].length;
  let res = -Infinity;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let num = dfs(grid, i, j, n, m, 0, 0);

      if (num > res) {
        res = num;
      }
    }
  }
  return res;
}

function dfs(grid, i, j, n, m, count, num) {
  if (i < 0 || i >= n || j < 0 || j >= m || count === 4) {
    return num;
  }
  if (grid[i][j] === "#") {
    return -Infinity;
  }
  let temp = grid[i][j];
  grid[i][j] = "#";

  let a = dfs(grid, i + 1, j, n, m, count + 1, num * 10 + temp);
  let b = dfs(grid, i - 1, j, n, m, count + 1, num * 10 + temp);
  let c = dfs(grid, i, j + 1, n, m, count + 1, num * 10 + temp);
  let d = dfs(grid, i, j - 1, n, m, count + 1, num * 10 + temp);

  grid[i][j] = temp;

  return Math.max(a, b, c, d);
}

let arr = [
  [9, 1, 1, 0, 7],
  [1, 0, 2, 1, 0],
  [1, 9, 1, 1, 0]
];
arr = [
  [1, 1, 1],
  [1, 3, 4],
  [1, 4, 3]
];
console.log(solution(arr));
