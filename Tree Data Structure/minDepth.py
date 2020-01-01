class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


class Solution:
    # @param A : root node of tree
    # @return an integer
    def __init__(self):
        self.res = float("inf")

    def findMin(self, node, current_depth):
        current_depth += 1
        if node.left is None and node.right is None:
            self.res = min(self.res, current_depth)
            return

        if node.left is not None:
            self.findMin(node.left, current_depth)
        if node.right is not None:
            self.findMin(node.right, current_depth)

    def minDepth(self, A):
        if A is None:
            return 0

        current_depth = 0
        if A.left is not None:
            self.findMin(A.left, current_depth)
        if A.right is not None:
            self.findMin(A.right, current_depth)

        return (0 if self.res == float("inf") else self.res) + 1


node = Node(7)
# node.left = Node(1)
# node.right = Node(2)
# node.right.left = Node(3)

s = Solution()
print(s.minDepth(node))
