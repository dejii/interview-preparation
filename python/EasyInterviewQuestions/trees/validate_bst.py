# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def validBST(self, root, lower, upper):
        if not root:
            return True

        val = root.val
        if val <= lower or val >= upper:
            return False

        return self.validBST(root.left, lower, val) and self.validBST(
            root.right, val, upper
        )

    def isValidBST(self, root):
        # lower = float("-inf")
        # upper = float("inf")

        # return self.validBST(root, lower, upper)

        stack = []
        prev = None
        while root or stack:

            while root:
                stack.append(root)
                root = root.left

            root = stack.pop()
            if prev is not None and prev.val >= root.val:
                return False

            prev = root
            root = root.right

        return True

