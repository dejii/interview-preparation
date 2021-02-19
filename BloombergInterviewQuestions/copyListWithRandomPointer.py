"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        # create a clone for each node
        
        clone_map = {}
        temp = head
        while temp:
            node = Node(temp.val)
            clone_map[temp] = node
            temp = temp.next
            
        temp = head
        while temp:
            clone_map[temp].next = clone_map.get(temp.next, None)
            clone_map[temp].random = clone_map.get(temp.random, None)
            temp = temp.next
        
        return clone_map.get(head)