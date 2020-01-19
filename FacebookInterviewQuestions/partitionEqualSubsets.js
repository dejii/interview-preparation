function partitionEqualSubsets(nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  if (total % 2 !== 0) {
    return false;
  }
  let visited = new Map();
  return canPartition(nums, 0, 0, total, visited);
}
function canPartition(nums, index, currentSum, total, visited) {
  let key = `${index}-${currentSum}`; // optimization
  if (visited.has(key)) {
    return visited.get(key);
  }
  // goal
  if (currentSum * 2 === total) {
    return true;
  }
  if (currentSum > total || index >= nums.length) {
    return false;
  }

  let found =
    canPartition(nums, index + 1, currentSum + nums[index], total, visited) ||
    canPartition(nums, index + 1, currentSum, total, visited);

  visited.set(key, found); // optimization

  return found;
}

let nums = [1, 5, 11, 5];

console.log(partitionEqualSubsets(nums));

/**
 * WITHOUT MEMO
 * function canPartition(nums, index, currentSum, total) {
  if (visited.has(key)) {
    return visited.get(key);
  }
  if (currentSum * 2 === total) {
    return true;
  }
  if (currentSum > total || index >= nums.length) {
    return false;
  }

  return (
    canPartition(nums, index + 1, currentSum + nums[index], total) ||
    canPartition(nums, index + 1, currentSum, total)
  );
}
 */
