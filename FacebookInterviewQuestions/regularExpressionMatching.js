var isMatch = function(s, p) {
  let dp = [];
  for (let i = 0; i <= s.length; i++) {
    const row = [];
    for (let j = 0; j <= p.length; j++) {
      row.push(false);
    }
    dp.push(row);
  }
  dp[0][0] = true;
  for (let i = 1; i <= s.length; i++) {
    dp[i][0] = false;
  }
  for (let j = 1; j <= p.length; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 2];
        if (p[j - 2] === "." || p[j - 2] === s[i - 1]) {
          dp[i][j] = dp[i][j] | dp[i - 1][j] ? true : false;
        }
      } else {
        dp[i][j] = false;
      }
    }
  }

  return dp[s.length][p.length];
};

console.log(isMatch("aa", "a*"));
// console.log(isMatch("xaabyc", "xa*b.c"));
