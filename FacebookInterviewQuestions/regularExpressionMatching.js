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

/**
 * 
 * There are two cases to consider:

First, the second character of p is *, now p string can match any number of character before *. 
if(isMatch(s, p.substring(2)) means we can match the remaining s string, otherwise, we check if 
the first character matches or not.

Second, if the second character is not *, we need match character one by one.

public boolean isMatch(String s, String p) {
    if (p.length() == 0) {
        return s.length() == 0;
    }
    if (p.length() > 1 && p.charAt(1) == '*') {  // second char is '*'
        if (isMatch(s, p.substring(2))) {
            return true;
        }
        if(s.length() > 0 && (p.charAt(0) == '.' || s.charAt(0) == p.charAt(0))) {
            return isMatch(s.substring(1), p);
        }
        return false;
    } else {                                     // second char is not '*'
        if(s.length() > 0 && (p.charAt(0) == '.' || s.charAt(0) == p.charAt(0))) {
            return isMatch(s.substring(1), p.substring(1));
        }
        return false;
    }
}
 */
/**
 * s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
Example 5:

Input:
s = "mississippi"
p = "mis*is*p*."
Output: false
Accepted
 */

/**
  * 
  *     Map<String, Boolean> cache;
    
    public boolean isMatch(String s, String p) {
        cache = new HashMap<>();
        return match(s, p);
    }
    
    private boolean match(String s, String p) {
        String key = s.length() + ":" + p.length();
        if (cache.containsKey(key)) {
            return cache.get(key);
        }
        
        boolean res = false;
        if (p.length() == 0) {
            res = s.length() == 0;
        } else if (p.length() > 1 && p.charAt(1) == '*') {
            if (s.length() > 0 && (s.charAt(0) == p.charAt(0) || p.charAt(0) == '.')) {
                res = match(s, p.substring(2)) || match(s.substring(1), p);
            } else {
                res = match(s, p.substring(2));
            }
        } else {
            if (s.length() > 0 && (s.charAt(0) == p.charAt(0) || p.charAt(0) == '.')) {
                res = match(s.substring(1), p.substring(1));
            }
        }
        
        cache.put(key, res);
        return res;
    }
  */
