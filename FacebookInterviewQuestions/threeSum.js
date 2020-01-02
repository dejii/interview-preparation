var threeSum = function(nums) {
  nums = nums.sort(function(x, y) {
    return x - y;
  });
  var result = [];
  for (var i = 0; i < nums.length - 2; i++) {
    // ensure no duplicate i
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      j = i + 1;
      k = nums.length - 1;
      while (j < k) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
          // eliminate all duplicates
          while (j < k && nums[j] === nums[j + 1]) {
            j++;
          }
          while (j < k && nums[k] === nums[k - 1]) {
            k--;
          }
          j++;
          k--;
        } else if (nums[i] + nums[j] + nums[k] < 0) {
          j++;
        } else {
          k--;
        }
      }
    }
  }

  return result;
};
