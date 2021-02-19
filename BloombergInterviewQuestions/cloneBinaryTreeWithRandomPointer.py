# Definition for Node.
# class Node:
#     def __init__(self, val=0, left=None, right=None, random=None):
#         self.val = val
#         self.left = left
#         self.right = right
#         self.random = random

class Solution:
    
    def helper(self, node, memo):
        if not node:
            return None
        
        if node in memo:
            return memo[node]
        
    
        newNode = NodeCopy(node.val)
        memo[node] = newNode
        newNode.left = self.helper(node.left, memo)
        newNode.right = self.helper(node.right, memo)
        newNode.random = self.helper(node.random, memo)
        
        return newNode
    
    def copyRandomBinaryTree(self, root: 'Node') -> 'NodeCopy':
        memo = {}
        return self.helper(root, memo)
        