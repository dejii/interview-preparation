class Solution:
    def inOrder(self, root, arr):
        if root is None:
            return
        else:
            self.inOrder(root.left, arr)
            arr.append(root.val)
            self.inOrder(root.right, arr)

    def getSuccessor_(self, A, B):
        arr = []
        self.inOrder(A, arr)
        n = len(arr)
        for i in range(n):
            if arr[i] == B:
                return arr[i + 1] if i + 1 < n else None

        return None

    def find(self, root, data):
        while root is not None and root.val != data:
            if data < root.val:
                root = root.left
            else:
                root = root.right

        return root if root is not None and root.val == data else None

    def findMin(self, root):
        temp = root
        while temp.left is not None:
            temp = temp.left
        return temp

    def getSuccessor(self, A, B):
        current = self.find(A, B)
        if current.right is not None:
            return self.findMin(current.right)
        else:
            successor = None
            ancestor = A
            while ancestor != current:
                if B < ancestor.val:
                    successor = ancestor
                    ancestor = ancestor.left
                else:
                    ancestor = ancestor.right

            return successor


class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


node = Node(15)
# L
node.left = Node(10)
node.left.left = Node(8)
node.left.right = Node(12)
node.left.left.left = Node(6)
node.left.right.left = Node(11)
# R
node.right = Node(20)
node.right.left = Node(17)
node.right.right = Node(25)
node.right.left.left = Node(16)
node.right.right.right = Node(27)


if __name__ == "__main__":
    s = Solution()
    print(s.getSuccessor(node, 16))

