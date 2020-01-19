/**
 * @param {string} s
 * @return {string}
 * Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside
 the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces,
 square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits 
and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 */
function isDigit(ch) {
  return (
    ch.charCodeAt(0) >= "0".charCodeAt(0) &&
    ch.charCodeAt(0) <= "9".charCodeAt(0)
  );
}
var decodeString = function(s) {
  let countStack = [];
  let charStack = [];
  let idx = 0;
  let n = s.length;
  let res = "";

  while (idx < n) {
    let ch = s.charAt(idx);
    if (isDigit(ch)) {
      let num = 0;
      while (idx < n && isDigit(s.charAt(idx))) {
        num = num * 10 + s.charCodeAt(idx) - "0".charCodeAt(0);
        idx++;
      }
      countStack.push(num);
    } else if (ch === "[") {
      // push state onto stack and clear the state
      charStack.push(res);
      res = "";
      idx++;
    } else if (ch === "]") {
      let temp = charStack.pop();
      let repeat = countStack.pop();
      //  what was in the stack previously + [repeat] what we're processing(res)
      temp = temp + res.repeat(repeat);
      res = temp;
      idx++;
    } else {
      res += s.charAt(idx);
      idx++;
    }
  }
  return res;
};

/**
 *
 * Time complexity is not O(n) but O(k_max*n).
 *  Imagine we have 10000[a]. Also, one stack is enough as we can just push "["
 * to separate string and integer so we don't need to check whether a number is integer.
 */
