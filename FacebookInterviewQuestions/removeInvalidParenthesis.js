/**
 * @param {string} s
 * @return {string[]}
 */
function isValid(s) {
  // incase of 2 )) ensure count is never less than 0
  let count = 0;
  for (let ch of s) {
    if (ch === "(") count++;
    if (ch === ")") count--;
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}
var removeInvalidParentheses = function(s) {
  let visited = new Set();
  let result = [];
  let queue = [];
  queue.push(s);
  visited.add(s);
  let found = false;
  while (queue.length > 0) {
    let current = queue.shift();
    if (isValid(current)) {
      result.push(current);
      found = true;
    }
    // ensure we dont go further levels down and we continue processing same level
    if (found) continue;

    for (let i = 0; i < current.length; i++) {
      if (current.charAt(i) !== "(" && current.charAt(i) !== ")") continue;
      // push onto the queue strings remove one bracket or not
      let t = current.substring(0, i) + current.substring(i + 1);

      if (!visited.has(t)) {
        visited.add(t);
        queue.push(t);
      }
    }
  }
  return result.length > 0 ? result : [""];
};

console.log(removeInvalidParentheses(")(f"));
// console.log(isValid("f"));

/**
 * 
 * On the first level, there's only one string which is the input string s, let's say the length of it is n, to check whether it's valid, we need O(n) time. On the second level, we remove one ( or ) from the first level, so there are C(n, n-1) new strings, each of them has n-1 characters, and for each string, we need to check whether it's valid or not, thus the total time complexity on this level is (n-1) x C(n, n-1). Come to the third level, total time complexity is (n-2) x C(n, n-2), so on and so forth...

Finally we have this formula:

T(n) = n x C(n, n) + (n-1) x C(n, n-1) + ... + 1 x C(n, 1) = n x 2^(n-1).


 * @SenyangZ Hi, there is no such problem with this code. It actually generates only 
 * ["()()"] on the given input "()(()". You may find it weird since the code does
 * ß not explicitly record the maximum length of the valid parentheses.

However, it does it implicitly. For a string of parentheses to be valid, 
its number of parentheses should be even. And at any time, strings in queue will only
 differ in length of 1 (this is the implicit control). When we find "()()" to be valid,
  both "()" and "" have not been added to queue yet and all the shorter strings are of length of 3, which must be invalid.
 */
