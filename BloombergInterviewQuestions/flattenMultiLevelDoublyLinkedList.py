"""
# Definition for a Node.
class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
"""


class Solution:
    def helper(self, head):
        if head is None:
            return head

        if head.child is None and head.next is None:  # final node ie tail
            return head

        if head.child is None and head.next:  # no child, continue traversing
            return self.helper(head.next)

        # child exist at this point
        child = head.child
        nextNode = head.next
        # disconnected the child pointer from the current node
        head.child = None
        # get the tail of the current child
        childTail = self.helper(child)
        childTail.next = nextNode
        head.next = child
        child.prev = head
        if nextNode is not None:
            nextNode.prev = childTail
            return self.helper(nextNode)

        return childTail

    def flatten(self, head: "Node") -> "Node":
        self.helper(head)
        return head

