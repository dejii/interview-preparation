/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sum = 0;
  // get total sum
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    // track left sum and see if its equal to the other end
    if (leftSum === sum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
  //     let left = [];
  //     let right = [];
  //     for (let i = 0; i < nums.length; i++) {
  //         left.push(0);
  //         right.push(0);
  //     }
  //     let leftSum = 0;
  //     for (let i = 0; i < nums.length; i++) {
  //         leftSum += nums[i];
  //         left[i] = leftSum;
  //     }
  //     let rightSum = 0;
  //     for (let i = nums.length - 1; i >= 0; i--) {
  //         rightSum += nums[i];
  //         right[i] = rightSum;

  //     }
  //     for (let i = 0; i < nums.length; i++) {
  //         if (left[i] === right[i]) {
  //             return i;
  //         }
  //     }
  //     return -1;
};
