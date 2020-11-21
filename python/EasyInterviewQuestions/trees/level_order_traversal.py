# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def helper(self, root, res, height):
        if root is None:
            return
        if height == len(res):
            res.append([])

        res[height].append(root.val)
        self.helper(root.left, res, height + 1)
        self.helper(root.right, res, height + 1)

    def levelOrder(self, root):
        # res = []
        # self.helper(root, res, 0)
        # return res

        res = []
        if not root:
            return res

        queue = []
        queue.append(root)

        while queue:
            n = len(queue)
            arr = []
            for i in range(n):
                node = queue.pop(0)
                arr.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            res.append(arr)
        return res

