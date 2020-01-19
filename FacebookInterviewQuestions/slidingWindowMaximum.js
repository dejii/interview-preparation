/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) return [];
  let result = new Array(nums.length - k + 1).fill(0);
  for (let i = 0; i < nums.length - k + 1; i++) {
    let max = -Infinity;
    for (let j = i; j < i + k; j++) {
      max = Math.max(max, nums[j]);
    }
    result[i] = max;
  }
  return result;
};
