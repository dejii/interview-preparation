function generatePowerSet(array) {
  var result = [];
  result.push([]);

  for (var i = 1; i < 1 << array.length; i++) {
    var subset = [];
    for (var j = 0; j < array.length; j++)
      if (i & (1 << j)) subset.push(array[j]);

    result.push(subset);
  }

  return result;
}

function maximumTotalWeight(weights, tasks, p) {
  //   const arr = tasks.map((task, i) => [task * 2, weights[i]]);
  //   tasks = tasks.map(t => t * 2);
  //   const set = generatePowerSet(arr);
  //   const contenders = set.filter(
  //     arr => arr.reduce((acc, val) => acc + val[0], 0) < p
  //   );
  //   console.log(contenders);
  //   const array = [];
  //   for (let i = 0; i < contenders.length; i++) {
  //     sum = contenders[i].reduce((acc, val) => acc + val[0], 0);
  //     array.push([sum, contenders[i].length, contenders[i].slice()]);
  //   }
  //   array.sort((x, y) => {
  //     if (y[0] === x[0]) {
  //       if (y[1] === x[1]) {
  //         return y[2].length - x[2].length;
  //       }
  //       return y[1] - x[1];
  //     }
  //     return y[0] - x[0];
  //   });
  //   console.log(array);
  //   return array[0][2].reduce((acc, val) => acc + val[0], 0);

  let dp = [];
  const m = Math.floor(p / 2 + 1);
  for (let i = 0; i < tasks.length + 1; i++) {
    const temp = [];
    for (let j = 0; j <= m; j++) {
      temp.push(0);
    }
    dp.push(temp);
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (j < tasks[i - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - tasks[i - 1]] + weights[i - 1]
        );
      }
    }
  }

  return dp[tasks.length][Math.floor(p / 2)];
}

console.log(maximumTotalWeight([2, 4, 4, 5], [2, 2, 3, 4], 15));
// console.log(maximumTotalWeight([1, 4, 2, 5, 3], [2, 6, 4, 7, 1], 8));
