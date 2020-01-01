function validSudoku(A) {
  var rows = [];
  var cols = [];
  var squares = [];
  for (var i = 0; i < 9; i++) {
    rows.push({});
    cols.push({});
    squares.push({});
  }

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      var val = A[i][j];
      if (val !== ".") {
        // console.log(val);
        var s = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        var row = rows[i];
        var col = cols[j];
        var square = squares[s];
        if (
          row.hasOwnProperty(val) ||
          col.hasOwnProperty(val) ||
          square.hasOwnProperty(val)
        ) {
          return 0;
        }

        row[val] = val;
        col[val] = val;
        square[val] = val;
        rows[i] = row;
        cols[j] = col;
        squares[s] = square;
      }
    }
  }
  return 1;
}

var a = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
// var a = [
//   "53..7....",
//   "6..195...",
//   ".98....6.",
//   "8...6...3",
//   "4..8.3..1",
//   "7...2...6",
//   ".6....28.",
//   "...419..5",
//   "....8..79"
// ];
console.log(validSudoku(a));
