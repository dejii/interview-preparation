/**
 * S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

Return any permutation of T (as a string) that satisfies this property.

Example :
Input: 
S = "cba"
T = "abcd"
Output: "cbad"
Explanation: 
"a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a". 
Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
  let count = new Array(26).fill(0);
  // count chars in T

  for (let ch of T) {
    let idx = ch.charCodeAt(0) - "a".charCodeAt(0);
    count[idx]++;
  }
  let result = [];
  // add chars in S maintaining the order
  for (let ch of S) {
    let idx = ch.charCodeAt(0) - "a".charCodeAt(0);
    // sort chars both in T and S by the order of S.
    while (count[idx] > 0) {
      result.push(ch);
      count[idx]--;
    }
  }

  // add remaining characters
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      let ch = String.fromCharCode(i + "a".charCodeAt(0));
      result.push(ch);
      count[i]--;
    }
  }
  return result.join("");
};
