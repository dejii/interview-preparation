/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * 
 * You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
Note:
All elements in nums1 and nums2 are unique.
The length of both nums1 and nums2 would not exceed 1000.
 */
class Stack {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  push(data) {
    return this.items.push(data);
  }
  pop() {
    if (this.isEmpty()) throw new Error("Empty Stack");
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) throw new Error("Empty Stack");
    let idx = this.items.length - 1;
    return this.items[idx];
  }
}
var nextGreaterElement = function(nums1, nums2) {
  let map = new Map();
  let stack = new Stack();
  for (let num of nums2) {
    // point lesser elements to their next greater ones in num2
    while (!stack.isEmpty() && stack.peek() < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }
  for (let i = 0; i < nums1.length; i++) {
    if (!map.has(nums1[i])) {
      nums1[i] = -1;
    } else {
      nums1[i] = map.get(nums1[i]);
    }
  }
  return nums1;
};

/**
 * public class Solution {
    public int[] nextGreaterElement(int[] findNums, int[] nums) {
        int[] res = new int[findNums.length];
        int j;
        for (int i = 0; i < findNums.length; i++) {
            boolean found = false;
            for (j = 0; j < nums.length; j++) {
                if (found && nums[j] > findNums[i]) {
                    res[i] = nums[j];
                    break;
                }
                if (nums[j] == findNums[i]) {
                    found = true;
                }
            }
            if (j == nums.length) {
                res[i] = -1;
            }
        }
        return res;
    }
}
 */
