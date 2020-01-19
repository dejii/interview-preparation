/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.sum = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    this.sum[i + 1] = this.sum[i] + nums[i];
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.sum[j + 1] - this.sum[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
