function helper(n, dp) {
  if (dp[n] != -1) {
    return dp[n];
  }
  if (n === 0) {
    return 0;
  }
  let min = Infinity;
  for (let i = 1; i * i <= n; i++) {
    let sq = i * i;
    let curr = helper(n - sq, dp) + 1;
    min = Math.min(min, curr);
  }
  dp[n] = min;
  return min;
}
var numSquares = function (n) {
  let dp = [];
  for (let i = 0; i <= n; i++) {
    dp.push(-1);
  }

  return helper(n, dp);
};
