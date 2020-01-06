function solution(grid) {
  let n = grid.length;
  let m = grid[0].length;
  let res = -Infinity;

  let visited = generate(n, m);
  const p = dfs(grid, 2, 1, n, m, 0, "", visited);
  // visited[2][1] = true;
  console.log(p);
  return;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < m; j++) {
      let visited = generate(n, m);
      console.log(`search  ${grid[i][j]}`);
      let num = dfs(grid, i, j, n, m, 0, 0, visited);
      console.log(num);
      break;

      if (num > res) {
        res = num;
      }
    }
  }
  return res;
}

function generate(n, m) {
  let visited = [];
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < m; j++) {
      arr.push(false);
    }
    visited.push(arr);
  }
  return visited;
}

function dfs(grid, i, j, n, m, count, num) {
  if (i < 0 || i >= n || j < 0 || j >= m || count === 4) {
    return num;
  }
  // console.log(`dfs(${num} * 10 + ${grid[i][j]})  = ${num * 10 + grid[i][j]}`);
  let a = dfs(grid, i + 1, j, n, m, count + 1, num + "" + grid[i][j]);
  let b = dfs(grid, i - 1, j, n, m, count + 1, num + "" + grid[i][j]);
  let c = dfs(grid, i, j + 1, n, m, count + 1, num + "" + grid[i][j]);
  let d = dfs(grid, i, j - 1, n, m, count + 1, num + "" + grid[i][j]);

  console.log("max of ", a, b, c, d);

  return Math.max(a, b, c, d);
}

let arr = [
  [9, 1, 1, 0, 7],
  [1, 0, 2, 1, 0],
  [1, 9, 1, 1, 0]
];
console.log(solution(arr));
