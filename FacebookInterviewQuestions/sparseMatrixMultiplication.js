function matrixMultiplication(matrixA, matrixB) {
  let rowA = matrixA.length;
  let colA = matrixA[0].length;
  let rowB = matrixB.length;
  let colB = matrixB[0].length;

  let product = [];
  for (let i = 0; i < rowA; i++) {
    let arr = [];
    for (let j = 0; j < colB; j++) {
      arr.push(0);
    }
    product.push(arr);
  }

  for (let i = 0; i < rowA; i++) {
    for (let j = 0; j < colA; j++) {
      if (matrixA[i][j] === 0) {
        continue;
      }
      for (let k = 0; k < colB; k++) {
        product[i][k] += matrixA[i][j] * matrixB[j][k];
      }
    }
  }
  return product;
}

function multiply(vectorA, matrixB, j) {
  let vectorB = [];
  for (let i = 0; i < matrixB.length; i++) {
    vectorB.push(matrixB[i][j]);
  }
  let result = 0;
  for (let i = 0; i < vectorA.length; i++) {
    result += vectorA[i] * vectorB[i];
  }
  return result;
}

function matrixMultiplication2(matrixA, matrixB) {
  let rowA = matrixA.length;
  let colA = matrixA[0].length;
  let rowB = matrixB.length;
  let colB = matrixB[0].length;

  let product = [];
  for (let i = 0; i < rowA; i++) {
    let arr = [];
    for (let j = 0; j < colB; j++) {
      arr.push(0);
    }
    product.push(arr);
  }

  let n = product.length;
  let m = product[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      product[i][j] = multiply(matrixA[i], matrixB, j);
    }
  }
  return product;
}

let A = [
  [1, 2, 3],
  [4, 5, 6]
];
let B = [
  [5, 8],
  [9, 10],
  [11, 12]
];
console.log(matrixMultiplication2(A, B));
