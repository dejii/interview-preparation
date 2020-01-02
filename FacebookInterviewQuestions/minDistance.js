var minDistance = function(word1, word2) {
  const dp = [];
  for (let i = 0; i <= word1.length; i++) {
    const row = [];
    for (let j = 0; j <= word2.length; j++) {
      row.push(0);
    }
    dp.push(row);
  }

  let c = 0;
  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = c;
    c++;
  }
  c = 0;
  for (let i = 0; i <= word2.length; i++) {
    dp[0][i] = c;
    c++;
  }
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] !== word2[j - 1]) {
        const diag = dp[i - 1][j - 1];
        const before = dp[i][j - 1];
        const top = dp[i - 1][j];
        dp[i][j] = Math.min(diag, before, top) + 1;
      } else {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }
  return dp[word1.length][word2.length];
};

console.log(minDistance("deji", "jide"));
