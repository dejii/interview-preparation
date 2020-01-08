/*
  Given two strings S and T, determine if they are both one edit distance apart. Hint:

If `| n – m |`` is greater than 1, we know immediately both are not one-edit distance apart.
It might help if you consider these cases separately, m == n and m ≠ n.
Assume that m is always ≤ n, which greatly simplifies the conditional statements. 
If m > n, we could just simply swap S and T.
If m == n, it becomes finding if there is exactly one modified operation.
 If m ≠ n you do not have to consider the delete operation. Just consider the insert operation in T.  
*/

/*
    SOLUTION
    
    O(n) runtime, O(1) space – Simple one-pass:

For the case where m is equal to n, it becomes finding if there is exactly one modified character. Now let’s assume m ≤ n. (If m > n we could just swap them). Assume X represents the one-edit character. There are three one-edit distance operations that could be applied to S.

i. Modify operation – Modify a character to X in S.

ii. Insert operation – X was inserted before a character in S.

iii. Append operation – X was appended at the end of S.

S = “abcde” T = “abXde”
S = “abcde” T = “abcXde”
S = “abcde” T = “abcdeX”
We make a first pass over S and T concurrently and stop at the first non-matching character between S and T.

If S matches all characters in T, then check if there is an extra character at the end of T. (Modify operation)
If | n – m | == 1, that means we must skip this non-matching character only in T and make sure the remaining characters between S and T are exactly matching. (Insert operation)
If | n – m | == 0, then we skip both non-matching characters in S and T and make sure the remaining characters between S and T are exactly matching. (Append operation)
*/

function oneEditDistance(s, t) {
  // ensure t is the bigger string
  let n = s.length;
  let m = t.length;
  if (n > m) {
    return oneEditDistance(t, s);
  }
  /*
    if m - n > 1, then we can have more than one edit distance
    eg s = abcd
       t = abcdef
       we need two operations
  */
  if (m - n > 1) {
    return false;
  }

  // n is the smaller value here
  let i = 0;
  let shift = m - n;
  while (i < n && s[i] === t[i]) {
    i++;
  }
  // if we're at the end of the string, check if the shift is greater than 0
  if (i === n) return shift > 0;

  // if the strings are equal and we're not at the end of the string, there's a mismatch, we move to the next one
  if (shift === 0) i++;

  // we're not at the end of the string, we check the remaining after where we met a mismatch
  while (i < n && s[i] === t[i + shift]) {
    i++;
  }
  // we check whether we got to the end of the smaller string and didn't find a mismatc
  return i === n;
}

function oneEditDistanceDp(s, t) {
  // create edit distance dp table
  let n = s.length;
  let m = t.length;
  let dp = [];

  // create dp table with an offset of +1 bigger than the strings
  // to cater for bottom base case
  for (let i = 0; i <= n; i++) {
    let arr = [];
    for (let j = 0; j <= m; j++) {
      arr.push(0);
    }
    dp.push(arr);
  }
  // initial edit distance along 1st row
  for (let j = 0; j <= m; j++) {
    dp[0][j] = j;
  }
  // initail edit distance along 1st column
  for (let i = 0; i <= n; i++) {
    dp[i][0] = i;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s[i - 1] !== t[j - 1]) {
        let diag = dp[i - 1][j - 1];
        let left = dp[i][j - 1];
        let top = dp[i - 1][j];
        dp[i][j] = Math.min(diag, left, top) + 1;
      } else {
        // they are equal so we take the previous edit distance
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }
  return dp[n][m] === 1;
}

let S = "abcd";
let T = "abcd";
console.log(oneEditDistance(S, T));
