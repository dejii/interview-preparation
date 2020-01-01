class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


class Solution:
    # @param A : root node of tree
    # @return an integer
    def __init__(self):
        self.total = 0

    def pathSum(self, node, curr):
        curr = (curr * 10) + node.val
        if node.left is None and node.right is None:
            self.total += curr % 1003
            return

        if node.left is not None:
            self.pathSum(node.left, curr)

        if node.right is not None:
            self.pathSum(node.right, curr)

    def sumNumbers(self, A):
        if A is None:
            return 0

        if A.left is None and A.right is None:
            return A.val

        curr = A.val
        if A.left is not None:
            self.pathSum(A.left, curr)

        if A.right is not None:
            self.pathSum(A.right, curr)

        return self.total


node = Node(1)
node.left = Node(2)
node.right = Node(3)

s = Solution()
print(s.sumNumbers(node))

