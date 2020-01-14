/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    let sum = 0;
    let mask = 1 << i;
    for (let num of nums) {
      if (num & mask) {
        sum++;
      }
    }
    if (sum % 3 === 1) {
      res |= mask;
    }
  }
  return res;
};
