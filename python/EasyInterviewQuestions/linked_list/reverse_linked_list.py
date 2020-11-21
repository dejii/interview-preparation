# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head):
        if head is None or head.next is None:
            return head

        p = self.reverseList(head.next)
        head.next.next = head
        head.next = None
        return p

        # prev = None
        # current = head
        # while current:
        #     next = current.next
        #     current.next = prev
        #     prev = current
        #     current = next
        # head = prev
        # return head
