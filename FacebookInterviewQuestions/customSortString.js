/**
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
