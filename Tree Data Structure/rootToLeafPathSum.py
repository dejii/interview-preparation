class Node:
    def __init__(self, data):
        self.val = data
        self.left = None
        self.right = None


class Solution:
    def findSum(self, node, current_sum, target, result, current_nums):
        current_nums.append(node.val)
        if current_sum == target and node.left is None and node.right is None:
            result.append(current_nums)
            return

        if node.left is not None:
            self.findSum(
                node.left,
                node.left.val + current_sum,
                target,
                result,
                current_nums.copy(),
            )

        if node.right is not None:
            self.findSum(
                node.right,
                node.right.val + current_sum,
                target,
                result,
                current_nums.copy(),
            )

    def pathSum(self, A, B):
        if A is None:
            return []
        result = []
        current_sum = 0
        current_sum += A.val
        current_nums = []
        current_nums.append(A.val)
        if A.left is not None:
            self.findSum(
                A.left, A.left.val + current_sum, B, result, current_nums.copy()
            )

        if A.right is not None:
            self.findSum(
                A.right, A.right.val + current_sum, B, result, current_nums.copy()
            )

        return result


node = Node(5)
node.left = Node(4)
node.left.left = Node(11)
node.left.left.right = Node(2)
node.left.left.left = Node(7)

node.right = Node(8)
node.right.left = Node(13)
node.right.right = Node(4)
node.right.right.left = Node(5)
node.right.right.right = Node(1)

s = Solution()
print(s.pathSum(node, 22))
