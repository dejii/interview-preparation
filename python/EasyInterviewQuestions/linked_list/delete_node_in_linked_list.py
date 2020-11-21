# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        # since we don't have pointer to prev node, we copy the val of current node to the next node and delete the next node
        node.val = node.next.val
        # set the next pointer of the deleted node to None
        temp = node.next
        node.next = node.next.next
        temp.next = None

