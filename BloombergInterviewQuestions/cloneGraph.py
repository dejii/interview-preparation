"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        from collections import deque
        
        if not node:
            return None
        
        clone_map = {}
        clone_map[node] = Node(node.val)
        queue = deque([])
        
        queue.append(node)
        while queue:
            curr = queue.popleft()
            
            for nextNode in curr.neighbors:
                nodeCopy = None
                if nextNode not in clone_map:
                    nodeCopy = Node(nextNode.val)
                    clone_map[nextNode] = nodeCopy
                    queue.append(nextNode)
                else:
                    nodeCopy = clone_map.get(nextNode)
                    
                clone_map[curr].neighbors.append(nodeCopy)
                
        return clone_map.get(node)