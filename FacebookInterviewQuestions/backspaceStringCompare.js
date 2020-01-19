/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let stackA = [];

  for (let i = 0; i < S.length; i++) {
    let ch = S.charAt(i);
    if (ch !== "#") {
      stackA.push(ch);
    } else {
      if (stackA.length > 0) {
        stackA.pop();
      }
    }
  }
  let stackB = [];
  for (let i = 0; i < T.length; i++) {
    let ch = T.charAt(i);
    if (ch !== "#") {
      stackB.push(ch);
    } else {
      if (stackB.length > 0) {
        stackB.pop();
      }
    }
  }

  return stackA.join("") === stackB.join("");
};

/**
 * 
 * Scan the String from right to left. Maintain the "#" count. Increment 'count' variable if the character encountered is '#'. Otherwise decrement the count and if the count is 0, append that character to the result.
Perform above for both the strings, compare the results and return true/false accordingly.

JAVA:

class Solution {
    
    private String getString(String str) {
        int n=str.length(), count=0;
        String result="";
        for(int i=n-1; i>=0; i--) {
            char ch=str.charAt(i);
            if(ch=='#') 
                count++;
            else {
                if(count>0)
                    count--;
                else {
                    result+=ch;
                }                     
            }
        }
        return result;
    }
    
    public boolean backspaceCompare(String S, String T) {
        return getString(S).equals(getString(T));
    }
}
 */

/**
  * 
  * Can you do it in O(N) time and O(1) space?
I believe you have one difficulty here: When we meet a char, we are not sure if it will be still there or be deleted.

However, we can do a back string compare (just like the title of problem).
If we do it backward, we meet a char and we can be sure this char won't be deleted.
If we meet a '#', it tell us we need to skip next lowercase char.

C++:

    bool backspaceCompare(string S, string T) {
        for (int i = S.length() - 1, j = T.length() - 1;; i--, j--) {
            for (int back = 0; i >= 0 && (back || S[i] == '#'); --i)
                back += S[i] == '#' ? 1 : -1;
            for (int back = 0; j >= 0 && (back || T[j] == '#'); --j)
                back += T[j] == '#' ? 1 : -1;
            if (i < 0 || j < 0 || S[i] != T[j]) return i == -1 && j == -1;
        }
    }
Java:

    public boolean backspaceCompare(String S, String T) {
        for (int i = S.length() - 1, j = T.length() - 1;; i--, j--) {
            for (int b = 0; i >= 0 && (b > 0 || S.charAt(i) == '#'); --i)
                b += S.charAt(i) == '#' ? 1 : -1;
            for (int b = 0; j >= 0 && (b > 0 || T.charAt(j) == '#'); --j)
                b += T.charAt(j) == '#' ? 1 : -1;
            if (i < 0 || j < 0 || S.charAt(i) != T.charAt(j)) return i == -1 && j == -1;
        }
    }

Update 2018-08-30:
People complained readability.
so I expanded this solution.
Hope it's better.

The idea is that, read next letter from end to start.
If we meet #, we increase the number we need to step back, until back = 0

C++:

    bool backspaceCompare(string S, string T) {
        int i = S.length() - 1, j = T.length() - 1;
        while (1) {
            for (int back = 0; i >= 0 && (back || S[i] == '#'); --i)
                back += S[i] == '#' ? 1 : -1;
            for (int back = 0; j >= 0 && (back || T[j] == '#'); --j)
                back += T[j] == '#' ? 1 : -1;
            if (i >= 0 && j >= 0 && S[i] == T[j])
                i--, j--;
            else
                return i == -1 && j == -1;
        }
    }
Java:

    public boolean backspaceCompare(String S, String T) {
        int i = S.length() - 1, j = T.length() - 1;
        while (true) {
            for (int back = 0; i >= 0 && (back > 0 || S.charAt(i) == '#'); --i)
                back += S.charAt(i) == '#' ? 1 : -1;
            for (int back = 0; j >= 0 && (back > 0 || T.charAt(j) == '#'); --j)
                back += T.charAt(j) == '#' ? 1 : -1;
            if (i >= 0 && j >= 0 && S.charAt(i) == T.charAt(j)) {
                i--; j--;
            } else
                return i == -1 && j == -1;
        }
    }
Python:

    def backspaceCompare(self, S, T):
        i, j = len(S) - 1, len(T) - 1
        backS = backT = 0
        while True:
            while i >= 0 and (backS or S[i] == '#'):
                backS += 1 if S[i] == '#' else -1
                i -= 1
            while j >= 0 and (backT or T[j] == '#'):
                backT += 1 if T[j] == '#' else -1
                j -= 1
            if not (i >= 0 and j >= 0 and S[i] == T[j]):
                return i == j == -1
            i, j = i - 1, j - 1
  */
