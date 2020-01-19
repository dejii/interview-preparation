/**
 * @param {number} n
 * @return {boolean}
 * 
 * Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: 
Starting with any positive integer, replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in
 a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 */
var isHappy = function(n) {
  let set = new Set();
  while (n !== 1) {
    let sum = 0;
    let current = n;
    while (current > 0) {
      console.log(current);
      sum += (current % 10) * (current % 10);
      current = Math.floor(current / 10);
    }
    // console.log(sum);

    if (set.has(sum)) {
      return false;
    }

    set.add(sum);
    n = sum;
  }

  return true;
};
console.log(isHappy(19));
