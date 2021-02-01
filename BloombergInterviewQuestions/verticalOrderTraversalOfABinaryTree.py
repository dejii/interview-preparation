# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class XTreeNode(TreeNode):
    def __init__(self, node):
        TreeNode.__init__(self, node.val, node.left, node.right)
        self.dist = 0
class Solution:
    def verticalTraversal(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        
        store = {}
        
        ans = []
        queue = []
        queue.append(XTreeNode(root))
        min_val = 0
        max_val = 0
        while queue:
            n = len(queue)
            tmp = {}
            for i in range(n):

                node = queue.pop(0)
                if node.dist in tmp:
                    tmp[node.dist].append(node.val)
                else:
                    tmp[node.dist] = [node.val]

                if node.left:
                    node.left = XTreeNode(node.left)
                    node.left.dist = node.dist - 1
                    min_val = min(min_val, node.dist - 1)
                    queue.append(node.left)

                if node.right:
                    node.right = XTreeNode(node.right)
                    node.right.dist = node.dist + 1
                    max_val = max(max_val, node.dist + 1)
                    queue.append(node.right)
                    
            for key in tmp:
                if key not in store:
                    store[key] = []
                arr = sorted(tmp[key])
                store[key].extend(arr)
    
        # print(store)
        for k in range(min_val, max_val + 1):
            tmp = store[k]
            ans.append(tmp)
            
        return ans