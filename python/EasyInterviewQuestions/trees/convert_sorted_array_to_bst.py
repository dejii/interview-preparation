# Definition for a binary tree node.
class ListNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def helper(self, nums, low, high):
        if low > high:
            return None

        mid = low + (high - low) // 2
        head = ListNode(nums[mid])

        head.left = self.helper(nums, low, mid - 1)
        head.right = self.helper(nums, mid + 1, high)

        return head

    def sortedArrayToBST(self, nums):
        n = len(nums)
        return self.helper(nums, 0, n - 1)
