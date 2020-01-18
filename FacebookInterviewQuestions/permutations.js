/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function dfs(nums, tempSet, tempList, result) {
  if (tempList.length === nums.length) {
    result.push(tempList.slice());
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (tempSet.has(nums[i])) continue;
      tempSet.add(nums[i]);
      tempList.push(nums[i]);
      dfs(nums, tempSet, tempList, result);
      let rem = tempList.pop();
      tempSet.delete(rem);
    }
  }
}
var permute = function(nums) {
  let result = [];
  dfs(nums, new Set(), [], result);
  return result;
};

console.log(permute([1, 2, 3]));

/*
[ 1 ]
[ 1, 2 ]
[ 1, 2, 3 ]
[ 1, 3 ]
[ 1, 3, 2 ]
[ 2 ]
[ 2, 1 ]
[ 2, 1, 3 ]
[ 2, 3 ]
[ 2, 3, 1 ]
[ 3 ]
[ 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2 ]
*/
