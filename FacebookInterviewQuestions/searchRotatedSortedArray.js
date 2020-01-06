function findLowestIndex(nums) {
  let start = 0;
  let end = nums.length - 1;
  let n = nums.length;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    let prev = (mid - 1 + n) % n;
    let next = (mid + 1) % n;

    if (nums[start] < nums[end]) {
      return start;
    }
    if (nums[prev] > nums[mid] && nums[mid] < nums[next]) {
      return mid;
    } else if (nums[mid] < nums[end]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

// [5,6,1,2,3,4]

// [1,2,3,4,5,6]

function binarySearch(nums, target, rotation) {
  let start = 0;
  let end = nums.length - 1;

  let n = nums.length;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    let realmid = (mid + rotation) % n;
    if (nums[realmid] === target) {
      return realmid;
    } else if (target < nums[realmid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

var search = function(nums, target) {
  const rotation = findLowestIndex(nums);
  // console.log(rotation);
  if (rotation !== -1) {
    return binarySearch(nums, target, rotation);
  }
  return -1;
};

console.log(search([5, 6, 1, 2, 3, 4], 6));
