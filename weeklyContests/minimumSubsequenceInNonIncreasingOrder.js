/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
    let total = nums.reduce((acc, val) => acc + val, 0);
    nums.sort((x, y) => x - y);
    console.log(nums)
    let temp = 0;
    let res = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        temp += nums[i];
        res.push(nums[i]);
        console.log(temp)
        if (temp > total - temp) {
            return res;
        }
    }
    return res;
};

console.log(minSubsequence([4, 3, 10, 9, 8]))