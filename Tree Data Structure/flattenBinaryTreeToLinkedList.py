class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


class Solution:
    # @param A : root node of tree
    # @return the root node in the tree
    def __init__(self):
        self.dummyNode = TreeNode(0)
        self.temp = self.dummyNode

    def preOrder(self, root):
        if root is None:
            return
        self.dummyNode.right = TreeNode(root.val)
        self.dummyNode = self.dummyNode.right
        # print(root.val)
        self.preOrder(root.left)
        self.preOrder(root.right)
        root = None

    def flatten(self, A):

        self.preOrder(A)

        return self.temp.right

        # def preOrder(self, root, arr):
        #     if root is None:
        #         return
        #     arr.append(root.val)
        #     self.preOrder(root.left, arr)
        #     self.preOrder(root.right, arr)

        # def flatten(self, A):
        #     arr = []
        #     self.preOrder(A, arr)
        #     print(arr)
        #     dummyNode = TreeNode(0)
        #     temp = dummyNode

        #     for i in range(len(arr)):
        #         temp.right = TreeNode(arr[i])
        #         temp = temp.right

        # return dummyNode.right

    def print(self, node):
        while node is not None:
            print(node.val)
            node = node.right


node = TreeNode(1)
node.left = TreeNode(2)
node.left.left = TreeNode(3)
node.left.right = TreeNode(4)
node.right = TreeNode(5)
node.right.right = TreeNode(6)

s = Solution()
print(s.print(s.flatten(node)))

