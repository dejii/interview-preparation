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
/**
 * First, we observe that for any given sequence that is in descending order, 
 * no next larger permutation is possible. For example, no next permutation is possible for the following array:

[9, 5, 4, 3, 1]
We need to find the first pair of two successive numbers a[i]a[i] and a[i-1]a[i−1], 
from the right, which satisfy a[i] > a[i-1]a[i]>a[i−1]. Now, no rearrangements to the right of a[i-1]a[i−1] 
can create a larger permutation since that subarray consists of numbers in descending order. Thus, 
we need to rearrange the numbers to the right of a[i-1]a[i−1] including itself.

Now, what kind of rearrangement will produce the next larger number? We want to create the permutation 
just larger than the current one. Therefore, we need to replace the number a[i-1]a[i−1] with the number
 which is just larger than itself among the numbers lying to its right section, say a[j]a[j].
 */
