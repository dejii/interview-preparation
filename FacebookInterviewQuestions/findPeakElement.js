/**
 * A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5 
Explanation: Your function can return either index number 1 where the peak element is 2, 
             or index number 5 where the peak element is 6.

 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return i;
    }
  }
  return nums.length - 1;
};

/**
 * Case 1. All the numbers appear in a descending order. In this case, the first element corresponds to the peak element. We start off by checking if the current element is larger than the next one. The first element satisfies this criteria, and is hence identified as the peak correctly. In this case, we didn't reach a point where we needed to compare nums[i]nums[i] with nums[i-1]nums[i−1] also, to determine if it is the peak element or not.

Case 2. All the elements appear in ascending order. In this case, we keep on comparing nums[i]nums[i] with nums[i+1]nums[i+1] to determine if nums[i]nums[i] is the peak element or not. None of the elements satisfy this criteria, indicating that we are currently on a rising slope and not on a peak. Thus, at the end, we need to return the last element as the peak element, which turns out to be correct. In this case also, we need not compare nums[i]nums[i] with nums[i-1]nums[i−1], since being on the rising slope is a sufficient condition to ensure that nums[i]nums[i] isn't the peak element.

Case 3. The peak appears somewhere in the middle. In this case, when we are traversing on the rising edge, as in Case 2, none of the elements will satisfy nums[i] > nums[i + 1]nums[i]>nums[i+1]. We need not compare nums[i]nums[i] with nums[i-1]nums[i−1] on the rising slope as discussed above. When we finally reach the peak element, the condition nums[i] > nums[i + 1]nums[i]>nums[i+1] is satisfied. We again, need not compare nums[i]nums[i] with nums[i-1]nums[i−1]. This is because, we could reach nums[i]nums[i] as the current element only when the check nums[i] > nums[i + 1]nums[i]>nums[i+1] failed for the previous((i-1)^{th}(i−1) 
th
  element, indicating that nums[i-1] < nums[i]nums[i−1]<nums[i]. Thus, we are able to identify the peak element correctly in this case as well.

public class Solution {
    public int findPeakElement(int[] nums) {
        int l = 0, r = nums.length - 1;
        while (l < r) {
            int mid = (l + r) / 2;
            if (nums[mid] > nums[mid + 1])
                r = mid;
            else
                l = mid + 1;
        }
        return l;
    }
}

Binary search is always true if we only need one of the peak because an upward 
slope and a downward slope always produces a peak at the middle of them. Hence, 
take a subsequence, if we can maintain at the beginning an upward slope and at the end a downward slope, then the sequence is like: up -> down -> up -> down -> ... -> down, and the worst situation is up -> down, so there is at least one peak.
Then it comes to the whole question: we don't know what the sequence is, but we know that at the beginning, -inf -> nums[0] is an upward slope, and at the end nums[-1] -> -inf is a downward slope. Hence, we either have a upward slope or a downward slope or both or a peak at every middle point, so we can terminate (peak) or we can always choose a half of the sequence to maintain our structure, so binary search works.
 */
