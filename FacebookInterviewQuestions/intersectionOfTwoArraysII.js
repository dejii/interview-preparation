/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  nums1 = nums1.sort((x, y) => x - y);
  nums2 = nums2.sort((x, y) => x - y);
  const m = nums1.length;
  const n = nums2.length;
  let i = 0;
  let j = 0;
  const result = [];
  while (i < m && j < n) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
};
