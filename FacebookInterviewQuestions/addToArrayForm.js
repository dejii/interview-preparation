/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let i = A.length - 1;
  let carry = 0;
  let result = [];
  while (i >= 0 || carry || K) {
    let n1 = i >= 0 ? A[i] : 0;
    let n2 = K % 10;
    let sum = n1 + n2 + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
    K = Math.floor(K / 10);
    i--;
  }
  return result.reverse();
};

console.log(addToArrayForm([0], 23));
