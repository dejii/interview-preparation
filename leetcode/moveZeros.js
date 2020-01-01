var moveZeroes = function(nums) {
  let i = 0;
  let j = 0;
  for (; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }
  while (j < nums.length) {
    nums[j] = 0;
    j++;
  }
  return nums;
};

console.log(moveZeroes([1, 2, 0, 5, 3]));
