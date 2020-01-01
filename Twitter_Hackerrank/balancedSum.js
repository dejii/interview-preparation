function balanceSum(sales) {
  const n = sales.length;
  const left = [];
  const right = [];
  let rightSum = 0;
  let leftSum = 0;
  for (let i = 0; i < n; i++) {
    left.push(leftSum);
    leftSum += sales[i];

    right.push(rightSum);
    rightSum += sales[n - i - 1];
  }
  right.reverse();
  for (let i = 0; i < n; i++) {
    if (left[i] === right[i]) {
      return i;
    }
  }
}

console.log(balanceSum([1, 2, 3, 3]));
