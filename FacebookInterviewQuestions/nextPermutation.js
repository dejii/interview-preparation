/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function reverse(nums, start) {
  let end = nums.length - 1;
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
}
var nextPermutation = function(nums) {
  let i = nums.length - 1;

  // find the pivot which is the first number before the decreasing sequence
  while (i > 0 && nums[i] <= nums[i - 1]) {
    i--;
  }
  if (i === 0) {
    reverse(nums, 0);
  } else {
    // i is at the head of the suffix
    let j = nums.length - 1;
    while (nums[j] <= nums[i - 1]) {
      j--;
    }

    // swap
    swap(nums, i - 1, j);

    // reverse suffix
    reverse(nums, i);
    console.log(nums);
  }
};

console.log(nextPermutation([1, 3, 2]));
// console.log(reverse([1, 2, 3], 0));
