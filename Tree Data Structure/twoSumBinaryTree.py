# Definition for a  binary tree node
# class TreeNode:
#    def __init__(self, x):
#        self.val = x
#        self.left = None
#        self.right = None


class Solution:
    # @param A : root node of tree
    # @param B : integer
    # @return an integer
    def findTarget(self, node, B, store):
        if node is None:
            return False

        comp = B - node.val
        if comp in store:
            return True

        store[node.val] = True
        return self.findTarget(node.left, B, store) or self.findTarget(
            node.right, B, store
        )

    def t2Sum(self, A, B):
        store = {}
        return 1 if self.findTarget(A, B, store) else 0
