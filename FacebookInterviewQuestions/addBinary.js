/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let n = Math.max(a.length, b.length) + 1;
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(0);
  }
  let i = a.length - 1;
  let j = b.length - 1;
  let p = n - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    let m = i >= 0 ? a.charCodeAt(i) - "0".charCodeAt(0) : 0;
    let n = j >= 0 ? b.charCodeAt(j) - "0".charCodeAt(0) : 0;
    let sum = m + n + carry;
    carry = Math.floor(sum / 2);
    res[p] = sum % 2;
    i--;
    j--;
    p--;
  }
  if (carry !== 0) {
    res[p] = 1;
  } else {
    res.shift();
  }
  return res.join("");
};
console.log(addBinary("111", "111"));
