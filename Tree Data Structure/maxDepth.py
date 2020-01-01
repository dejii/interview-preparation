class Solution:
    # @param A : root node of tree
    # @return an integer
    def maxDepth(self, A):
        if A is None:
            return 0

        if A.left is None and A.right is None:
            return 1

        if A.left is None:
            return self.maxDepth(A.right) + 1

        if A.right is None:
            return self.maxDepth(A.left) + 1

        return max(self.maxDepth(A.left), self.maxDepth(A.right)) + 1
