function gridGame(grid, k, rules) {
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1]
  ];
  let n = grid.length;
  let m = grid[0].length;
  let liveCells = [];
  for (let i = 0; i < n; i++) {
    let temp = new Array(m).fill(0);
    liveCells.push(temp);
  }

  for (let l = 0; l < k; l++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        let count = 0;
        for (let [dirX, dirY] of directions) {
          let x = i + dirX;
          let y = j + dirY;
          if (x >= 0 && x < n && y >= 0 && y < m) {
            if (grid[x][y] === 1) {
              count++;
            }
          }
        }
        liveCells[i][j] = count;
      }
    }
    // console.log(liveCells);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (rules[liveCells[i][j]] === "alive") {
          grid[i][j] = 1;
        } else {
          grid[i][j] = 0;
        }
      }
    }
  }
  return grid;
}
