function partitionKEqualSubsets(nums, k) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }

  if (k <= 0 || k > nums.length || total % k !== 0) {
    return false;
  }

  let used = new Array(nums.length).fill(false);

  return canPartition(nums, 0, 0, k, total / k, used);
}

function canPartition(nums, index, currentSum, k, target, used) {
  if (k === 1) {
    return true;
  }
  if (currentSum === target) {
    return canPartition(nums, 0, 0, k - 1, target, used);
  }
  for (let i = index; i < nums.length; i++) {
    if (!used[i] && currentSum + nums[i] <= target) {
      used[i] = true;
      if (canPartition(nums, i + 1, currentSum + nums[i], k, target, used)) {
        return true;
      }
      used[i] = false;
    }
  }
  return false;
}

let nums = [1, 5, 11, 5];
console.log(partitionKEqualSubsets(nums, 2));

/**
 *  I believe the time complexity though is O(2^n) you are either picking or not picking
 *  the element so for n elements with two possibilities you could have two decision trees potentially of depth n.
 */
