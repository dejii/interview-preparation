# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def removeNthFromEnd(self, head, n):
        dummy = ListNode(0)
        dummy.next = head
        first = dummy
        second = dummy
        i = 0
        while i < n:
            first = first.next
            i += 1

        while first.next:
            first = first.next
            second = second.next

        temp = second.next
        second.next = second.next.next
        temp.next = None

        return dummy.next

