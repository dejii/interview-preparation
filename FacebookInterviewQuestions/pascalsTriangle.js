/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows < 1) {
    return [];
  }

  let result = [];
  let row = [];

  for (let i = 0; i < numRows; i++) {
    row.unshift(1);
    for (let i = 1; i < row.length - 1; i++) {
      row[i] = row[i] + row[i + 1];
    }
    result.push(row.slice());
  }
  return result;
};
