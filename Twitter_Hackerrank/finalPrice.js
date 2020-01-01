function findNextMin(num, start, n, arr) {
  for (let i = start; i < n; i++) {
    if (num >= arr[i]) {
      return arr[i];
    }
  }
  return null;
}

function finalPrice(prices) {
  const n = prices.length;
  const right = [];
  //   let min = Infinity;
  //   for (let i = n - 1; i >= 0; i--) {
  //     right.push(min);
  //     min = Math.min(prices[i], min);
  //   }
  for (let i = 0; i < n; i++) {
    const res = findNextMin(prices[i], i + 1, n, prices);
    if (res !== null) {
      right.push(res);
    } else {
      right.push(Infinity);
    }
  }

  const fullPriceIndices = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (prices[i] >= right[i]) {
      sum += prices[i] - right[i];
    } else {
      sum += prices[i];
      fullPriceIndices.push(i);
    }
  }
  console.log(sum);
  console.log(fullPriceIndices.join(" "));
}
console.log(finalPrice([2, 3, 1, 2, 4, 2]));
