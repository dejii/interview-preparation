/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let A = matrix;
  if (A.length === 0) {
    return [];
  }
  let m = A.length;
  let n = A[0].length;

  /* 
        m = no of rows
        n = no of cols
        T = topmost row, B = Last row
        L = first column, R = last column
        dir = direction | 0 => left - right | 1 => top - bottom | 2 => right - left | 3 bottom - top
    */
  let T = 0;
  let B = m - 1;
  let L = 0;
  let R = n - 1;
  let dir = 0;
  let result = [];

  while (T <= B && L <= R) {
    if (dir === 0) {
      for (let i = L; i <= R; i++) {
        result.push(A[T][i]);
      }
      T++;
      dir = 1;
    } else if (dir === 1) {
      for (let i = T; i <= B; i++) {
        result.push(A[i][R]);
      }
      R--;
      dir = 2;
    } else if (dir === 2) {
      for (i = R; i >= L; i--) {
        result.push(A[B][i]);
      }
      B--;
      dir = 3;
    } else if (dir === 3) {
      for (i = B; i >= T; i--) {
        result.push(A[i][L]);
      }
      L++;
      dir = 0;
    }

    // or we can refactor the direction dir into
    // dir = (dir + 1) % 4
  }
  return result;
};
