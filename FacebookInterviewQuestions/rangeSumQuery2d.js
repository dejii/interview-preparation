/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.grid = matrix;
  this.dp = [];
  let row = matrix.length;
  let col = row > 0 ? matrix[0].length : 0;
  for (let i = 0; i <= row; i++) {
    let temp = new Array(col + 1).fill(0);
    this.dp.push(temp);
  }

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      // top rect sum + left rect sum  + val - common sum
      this.dp[i][j] =
        this.dp[i - 1][j] +
        this.dp[i][j - 1] +
        matrix[i - 1][j - 1] -
        this.dp[i - 1][j - 1];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  // sum of whole rect - sum of row before rect + sum of col before rect + common sum
  return (
    this.dp[row2 + 1][col2 + 1] -
    this.dp[row2 + 1][col1] -
    this.dp[row1][col2 + 1] +
    this.dp[row1][col1]
  );
  //     let sum = 0;
  //     for (let i = row1; i <= row2; i++) {

  //         for (let j = col1; j <= col2 ; j++) {
  //             sum += this.grid[i][j];
  //         }
  //     }
  //     return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

/**
 * 
 * We could trade in extra space for speed by pre-calculating all possible rectangular region sum and 
 * store them in a hash table. Each sumRegion query now takes only constant time complexity.

Complexity analysis

Time complexity : O(1)O(1) time per query, O(m^2n^2)O(m 2 n 2)
 ) time pre-computation. Each sumRegion query takes O(1)O(1) time as the hash table lookup's 
 time complexity is constant. The pre-computation will take O(m^2n^2)O(m 2 n 2 ) time as there are a total of m^2 \times n^2m 
2
 ×n 
2
  possibilities need to be cached.

Space complexity : O(m^2n^2)O(m 
2
 n 
2
 ). Since there are mnmn different possibilities for both top left and bottom right points of
  the rectangular region, the extra space required is O(m^2n^2)O(m 
2
 n 
2
 ).
 */
