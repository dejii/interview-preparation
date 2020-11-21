function countGroups(related) {
  let grid = [];
  for (let i = 0; i < related.length; i++) {
    let line = related[i];
    grid.push(line.split(""));
  }

  let n = grid.length;
  let visited = [];
  for (let i = 0; i < n; i++) {
    visited.push(0);
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i] == 0) {
      dfs(grid, visited, i);
      count++;
    }
  }

  return count;
}

function dfs(grid, visited, i) {
  for (let j = 0; j < grid.length; j++) {
    if (grid[i][j] == 1 && visited[j] == 0) {
      visited[j] = 1;
      dfs(grid, visited, j);
    }
  }
}

// let related = ["1100", "1110", "0110", "0001"];
// let related = ["10000", "01000", "00100", "00010", "00001"];

let related = [
  "1000001000",
  "0100010001",
  "0010100000",
  "0001000000",
  "0010100000",
  "0100010000",
  "1000001000",
  "0000000100",
  "0000000010",
  "0100000001",
];

console.log(countGroups(related));
