/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let t = s
    .split("")
    .reverse()
    .join("");

  let dp = [];
  for (let i = 0; i <= s.length; i++) {
    let arr = [];
    for (let j = 0; j <= s.length; j++) {
      arr.push(0);
    }
    dp.push(arr);
  }

  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j <= s.length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[s.length][s.length];
};
console.log(longestPalindrome("aacdefcaa"));

/** #include <bits/stdc++.h> 
using namespace std; 
  
int max(int a, int b);  
  
int lcs( char *X, char *Y, int m, int n )  
{  
    if (m == 0 || n == 0)  
        return 0;  
    if (X[m-1] == Y[n-1])  
        return 1 + lcs(X, Y, m-1, n-1);  
    else
        return max(lcs(X, Y, m, n-1), lcs(X, Y, m-1, n));  
}  
  

int max(int a, int b)  
{  
    return (a > b)? a : b;  
}  
  

int main()  
{  
    char X[] = "AGGTAB";  
    char Y[] = "GXTXAYB";  
      
    int m = strlen(X);  
    int n = strlen(Y);  
      
    cout<<"Length of LCS is "<< lcs( X, Y, m, n ) ;  
      
    return 0;  
}  

#include <bits/stdc++.h> 
using namespace std; 
  
int lcs( string X, string Y, int m, int n ) 
{ 
    int L[m + 1][n + 1]; 
  
    Following steps build L[m+1][n+1] in bottom up 
        fashion. Note that L[i][j] contains length of 
        LCS of X[0..i-1] and Y[0..j-1]
    for (int i = 0; i <= m; i++) 
    { 
        for (int j = 0; j <= n; j++) 
        { 
            if (i == 0 || j == 0) 
                L[i][j] = 0; 
            else if (X[i - 1] == Y[j - 1]) 
                L[i][j] = L[i - 1][j - 1] + 1; 
            else
                L[i][j] = max(L[i - 1][j], L[i][j - 1]); 
        } 
    } 
    // L[m][n] contains length of LCS for X and Y 
    return L[m][n]; 
} 
  
// find if given string is K-Palindrome or not 
bool isKPal(string str, int k) 
{ 
    int n = str.length(); 
  
    // Find reverse of string 
    string revStr = str; 
    reverse(revStr.begin(), revStr.end()); 
  
    // find longest palindromic subsequence of 
    // given string 
    int lps = lcs(str, revStr, n, n); 
  
    // If the difference between longest palindromic 
    // subsequence and the original string is less 
    // than equal to k, then the string is k-palindrome 
    return (n - lps <= k); 
} 
  */
