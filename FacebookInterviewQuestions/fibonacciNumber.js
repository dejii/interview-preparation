var fib = function(N) {
  if (N <= 1) {
    return N;
  }
  let a = 0;
  let b = 1;
  while (N > 1) {
    let sum = a + b;
    a = b;
    b = sum;
    N--;
  }
  return b;
};

var fibCache = function(N) {
  // bottom up dp
  let dp = new Array(N + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[N];
};
console.log(fibCache(4));
