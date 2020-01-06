var removeDuplicates = function(nums) {
  for (var i = 1, j = 0; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};
